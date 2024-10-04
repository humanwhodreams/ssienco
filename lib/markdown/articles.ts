import * as fs from 'fs';

import html from 'remark-html';
import matter from 'gray-matter';
import moment from 'moment';
import path from 'path';
import { remark } from 'remark';

type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
};

const CONTENT_DIRECTORY = path.join(process.cwd(), 'content');

const ARTICLE_DRIECTORY = path.join(CONTENT_DIRECTORY, 'articles');

function getSortedContents(): Article[] {
  const fileNames = fs.readdirSync(ARTICLE_DRIECTORY);

  const metadata = fileNames.map((file) => {
    const id = file.replace(/\.md$/, '');

    const _file = path.join(ARTICLE_DRIECTORY, file);

    const contents = fs.readFileSync(_file, 'utf-8');

    const matterized = matter(contents);

    return {
      id,
      slug: id,
      title: matterized.data.title,
      category: matterized.data.category,
      date: matterized.data.date,
    };
  });

  return metadata.sort((a, b) => {
    const dateFormat = 'DD-MM-YYYY';
    const previousDate = moment(a.date, dateFormat);
    const currentDate = moment(b.date, dateFormat);

    if (previousDate.isBefore(currentDate)) {
      return -1;
    } else if (currentDate.isAfter(previousDate)) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getCategorizedContents(): Record<string, Article[]> {
  const sortedContents = getSortedContents();
  const categorizedContents: Record<string, Article[]> = {};

  sortedContents.forEach((content) => {
    if (!categorizedContents[content.category]) {
      categorizedContents[content.category] = [];
    }
    categorizedContents[content.category].push(content);
  });

  return categorizedContents;
}

async function getContentData(id: string) {
  const filePath = path.join(ARTICLE_DRIECTORY, `${id}.md`);

  const contents = fs.readFileSync(filePath, 'utf-8');

  const matterized = matter(contents);

  const santizedContent = await remark().use(html).process(matterized.content);

  const content = santizedContent.toString();

  return {
    id,
    content,
    title: matterized.data.title,
    category: matterized.data.category,
    date: moment(matterized.data.date, 'DD-MM-YYYY').format('MMMM Do YYYY'),
  };
}

export { getSortedContents, getCategorizedContents, getContentData, type Article };
