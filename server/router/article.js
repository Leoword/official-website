const Router = require('koa-router');
const router = module.exports = new Router();
const validate = require('koa2-validation');

const {article: articleValidate, category: categoryValidate} = require('../validator');
const {article, language, category, classification} = require('../middleware');

router.post('/article', validate(articleValidate.create), article.create);
router.get('/article', validate(articleValidate.create), article.getList);
router.delete('/article/:id', article.getRetrive);

router.post('/article/:id/language', validate(articleValidate.create), article.getRetrive, language.create);
router.get('/article/:id/language',  validate(articleValidate.create), article.getRetrive, language.getList);
router.get('/article/:articleId/language/:languageId', article.getRetrive, language.getRetrive);
router.put('/article/:articleId/language/:languageId',  validate(articleValidate.update), article.getRetrive, language.update);
router.delete('/article/:articleId/language/:languageId', article.getRetrive, language.getRetrive, language.delete);

router.post('/category', validate(categoryValidate.create), category.create);
router.get('/category', category.getList);
router.get('/category/:id', category.getRetrive);
router.put('/category/:id', validate(categoryValidate.update), category.update);
router.delete('/category/:id', category.getRetrive, category.delete);

router.post('/article/:articleId/category/:categoryId', article.getRetrive, category.getRetrive, classification.create);
router.delete('/article/:articleId/category/:categoryId', article.getRetrive, category.getRetrive, classification.delete);
router.get('/article/:articleId/category', article.getRetrive, classification.getCategoryList);
router.get('/category/:categoryId/article', category.getRetrive, classification.getArticleList);