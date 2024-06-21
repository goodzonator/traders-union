import gulp from 'gulp';

import { plugins } from '../config/plugins.js';
import { filePaths } from '../config/paths.js';
import { logger } from "../config/Logger.js";

const copyRootFiles = () => {
  const config = {
    dot: true,
    allowEmpty: true,
  };

  /** Добавляем файлы, которые нужны в корне проекта */
  const files = ['favicon.ico', '.htaccess', 'robots.txt',
                 'README.md', 'push.js', 'manifest.json',
                 'site.webmanifest', 'sitemap.xml', 'stripe-key',
                 'sw.js', 'packets_new_android.json', 'packets_android3.json',
                 'packets_android2.json', 'packets_android.json', 'packets3.json',
                 'packets2.json', 'packets.json', 'megakassa_2d4e46aa28df.txt',
                 'main.css', 'latest.json', 'index_backup.html',
                 'index_back_after_NY.html', 'fk-verify.html', 'firebase_subscribe.js',
                 'firebase-messaging-sw.js', 'cardservice2.json', 'cardservice.json',
                 '4411bced1bde95f820af8c282fe00cec.txt', '6a27e42218bb2bc97fffd0ace6c81b1b.txt'];

  return gulp.src(plugins.concat(filePaths.srcFolder, files), config)
    .pipe(logger.handleError('COPY ROOT FILES'))
    .pipe(gulp.dest(filePaths.buildFolder));
};

export { copyRootFiles };