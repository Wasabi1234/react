webpackJsonp([0x7fab07c9bb29],{883:function(e,t){e.exports={data:{markdownRemark:{html:'<p>如果你通过 <code class="gatsby-code-text">&lt;script&gt;</code> 标签加载React，这些高阶API可用于 <code class="gatsby-code-text">ReactDOMServer</code> 全局。如果你使用ES6，你可以写成 <code class="gatsby-code-text">import ReactDOMServer from &#39;react-dom/server&#39;</code>。如果你使用ES5，你可以写成 <code class="gatsby-code-text">var ReactDOMServer = require(&#39;react-dom/server&#39;)</code>。</p>\n<h2 id="概览"><a href="#%E6%A6%82%E8%A7%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>概览</h2>\n<p><code class="gatsby-code-text">ReactDOMServer</code> 类可以让你在服务端渲染你的组件。</p>\n<ul>\n<li><a href="#rendertostring"><code class="gatsby-code-text">renderToString()</code></a></li>\n<li><a href="#rendertostaticmarkup"><code class="gatsby-code-text">renderToStaticMarkup()</code></a></li>\n</ul>\n<hr>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="rendertostring"><a href="#rendertostring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">renderToString()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">ReactDOMServer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>把一个React元素渲染为原始的HTML。这个方法最好只在服务端使用。React将会返回一段HTML字符串。你可以用这个方法在服务端生成HTML，并根据初始请求发送标记来加快页面的加载速度，同时让搜索引擎可以抓取你的页面来达到优化SEO的目的。</p>\n<p>如果在一个已经有了服务端渲染标记的节点上调用 <a href="/docs/react-dom.html#render"><code class="gatsby-code-text">ReactDOM.render()</code></a> ，React将保留该节点，仅作绑定事件处理，这会让你有一个非常高效的初次加载体验。</p>\n<hr>\n<h3 id="rendertostaticmarkup"><a href="#rendertostaticmarkup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">renderToStaticMarkup()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">ReactDOMServer<span class="token punctuation">.</span><span class="token function">renderToStaticMarkup</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>类似 <a href="#rendertostring"><code class="gatsby-code-text">renderToString</code></a>，但是不会创建额外的DOM属性，例如 <code class="gatsby-code-text">data-reactid</code> 这些仅在React内部使用的属性。如果你希望把React当作一个简单的静态页面生成器来使用，这很有用，因为去掉额外的属性可以节省很多字节。</p>',frontmatter:{title:"ReactDOMServer",next:null,prev:null},fields:{path:"docs/reference-react-dom-server.md",slug:"docs/react-dom-server.html"}}},pathContext:{slug:"docs/react-dom-server.html"}}}});
//# sourceMappingURL=path---docs-react-dom-server-html-f5e8f64b791629bc360b.js.map