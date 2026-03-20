# 王明课题组网站模板

这是一个可直接部署到 GitHub Pages 的静态网站模板，面向“王明课题组（超分子化学）”场景。

## 已包含模块

- 课题组概况（名称、研究领域、研究方向）
- 研究方向展示
- 成员介绍（研究人员、学生、毕业成员）
- 研究成果（论文/项目/会议切换）
- 新闻与动态
- 联系方式与社交媒体

## 本地预览

直接双击 `index.html` 打开，或用任意静态服务器运行。

## 你需要优先修改的内容

1. `script.js` 中 `memberData`、`outputData`、`newsData` 的示例数据
2. `index.html` 中联系方式、地址、社交媒体链接
3. `index.html` 首页统计数字

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库（例如：`wangming-lab`）。
2. 上传本目录全部文件。
3. 仓库 `Settings` -> `Pages`：
   - `Source` 选 `Deploy from a branch`
   - `Branch` 选 `main`，目录选 `/ (root)`
4. 保存后等待 1-3 分钟，访问生成的 Pages 链接。

## 文件结构

```text
wangming-lab-site/
  index.html
  styles.css
  script.js
  README.md
```
