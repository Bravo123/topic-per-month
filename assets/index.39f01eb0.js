import{b as n}from"./app.467c301a.js";import{z as a,o as s,c as e,a as t,k as p,A as r,l as o}from"./vendor.8b609d57.js";const l={class:"markdown-body"},i=r('<p><div class="table-of-contents"><ul><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BE%AE%E5%89%8D%E7%AB%AF%EF%BC%9F"> 什么是微前端？</a></li><li><a href="#%E9%82%A3%E4%B9%88%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%88%B0%E5%BA%95%E8%A7%A3%E5%86%B3%E7%9A%84%E6%98%AF%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%EF%BC%9F"> 那么微前端到底解决的是什么问题？</a></li><li><a href="#%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E8%BF%99%E4%BA%9B%E9%97%AE%E9%A2%98%E7%9A%84%EF%BC%9F"> 微前端怎么解决这些问题的？</a><ul><li><a href="#npm-package-%2F-git-submodule"> npm package / git submodule</a></li><li><a href="#iframe"> iframe</a></li><li><a href="#micro-frontend-%E6%A1%86%E6%9E%B6"> micro frontend 框架</a></li></ul></li><li><a href="#%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6%E4%BD%93%E9%AA%8C"> 微前端框架体验</a><ul><li><a href="#luigi"> Luigi</a></li><li><a href="#emp"> EMP</a></li><li><a href="#single-spa"> Single-SPA</a></li><li><a href="#qiankun"> QianKun</a></li></ul></li><li><a href="#%E5%BE%AE%E5%89%8D%E7%AB%AF%E9%9C%80%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98"> 微前端需要解决的问题</a><ul><li><a href="#%E6%9C%8D%E5%8A%A1%E6%9B%B4%E6%96%B0%E9%97%AE%E9%A2%98"> 服务更新问题</a></li><li><a href="#%E9%80%9A%E4%BF%A1%E9%97%AE%E9%A2%98"> 通信问题</a></li><li><a href="#%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB%E9%97%AE%E9%A2%98"> 样式隔离问题</a></li><li><a href="#%E7%8E%AF%E5%A2%83%E9%9A%94%E7%A6%BB%E9%97%AE%E9%A2%98"> 环境隔离问题</a></li><li><a href="#%E5%A6%82%E4%BD%95%E5%88%86%E7%A6%BB%E5%9B%A2%E9%98%9F%E5%92%8C%E5%BC%80%E5%8F%91"> 如何分离团队和开发</a></li></ul></li><li><a href="#%E9%9C%80%E8%A6%81%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%90%97%EF%BC%9F"> 需要微前端吗？</a></li><li><a href="#%E6%8E%A8%E8%8D%90%E9%98%85%E8%AF%BB"> 推荐阅读</a></li></ul></div></p>',1),u={id:"%E4%BB%80%E4%B9%88%E6%98%AF%E5%BE%AE%E5%89%8D%E7%AB%AF%EF%BC%9F",tabindex:"-1"},c=o("#"),E=o(" 什么是微前端？"),d=o("引用一句 "),k=o("micro-frontends"),b=o(" 的一句话"),h=r("<blockquote><p>Techniques, strategies and recipes for building <strong>a modern web app</strong> with <strong>multiple teams</strong> that can <strong>ship features independently</strong>.</p></blockquote><p>简单翻译一下，大概意思是：用技术、策略和方法隔离不同 <strong>团队</strong> 开发的 <strong>功能</strong>，并构建 <strong>现代化的 web 应用</strong>。</p><p>经常有听到「微前端框架」这个词，那「微前端」是一门技术？不，微前端并不是一门技术，微前端仅仅是一种手段，通过制定一些标准，合作开发这个项目的团队都遵守这些标准。再通过这些标准整合起来的架构，也就成了「微前端」。</p>",3),g={id:"%E9%82%A3%E4%B9%88%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%88%B0%E5%BA%95%E8%A7%A3%E5%86%B3%E7%9A%84%E6%98%AF%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%EF%BC%9F",tabindex:"-1"},f=o("#"),m=o(" 那么微前端到底解决的是什么问题？"),A=r('<p>想想我最初接触微前端，还是第一份正式工作的时候，当时是在一个创业公司，刚刚成立几个月。我进去的时候，公司有两个应用，一个 A 应用，一个 B 应用，分别对应两个域名。现在公司想做整合，把两个应用的功能整合在一起，组合起来，举个栗子。A 应用有两个页面，分别是 A-1，A-2。现在 B 应用，想要 A-1 这个功能，也就是这个页面，而且想要保持同步更新，也就是，只发布一次，就能同时更新 A 应用中的 A-1 和 B 应用中的 A-1。</p><p>当时的想法比较简单，因为公司用的 vue 框架，而 vue 组件可以打包成一个 js 文件。所以，一个简单的做法，就是把 A 应用中所有功能做成组件，然后打包成一个 js 文件，然后在 B 应用中，引用这个 js 文件，取其中的 A-1 组件，这样也就解决了问题。</p><p>其中核心的代码，大概是这样：</p><div class="language-ts line-numbers-mode"><pre><code><span class="token comment">// &lt;script src=&quot;//xxx.A.js&quot;/&gt;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">A1</span> <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>_A\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/a-1&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> <span class="token constant">A</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>从这个栗子中，可以看到，解决的问题也就是：如何在一个应用中引入一个不需要自己维护的能力或者功能。</p><p>进而拓展一下，可以理解成，我简单写一个模板，然后配置其中每个模块的功能，这样，一个应用就完成了。每个模板的功能，都交由不同的团队去维护。如果能实现这样的一个工具，那么就能大大的缩短一款产品的开发成本（想想就开心，做梦真好）。</p>',6),B=o("在写这片文章的时候，有幸读到 "),w=o("微前端的核心价值"),_=o("。"),S=t("p",null,"文中用了一整个章节来讨论「微前端」的价值，我简单的总结一下文中的概念，大致是：「微前端」解决的是如何让一个应用存活 3-5 年之后，开发者还能继续为其赋能，就像文章结尾所讲。",-1),F=t("blockquote",null,[t("p",null,"那么微前端的使命我认为是：「让天下没有短命的控制台」。")],-1),y=t("p",null,"至此，我想，你应该大致对「微前端」有了一个了解。接下来就我们就唠嗑一下怎么解决这些问题。",-1),x={id:"%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E8%BF%99%E4%BA%9B%E9%97%AE%E9%A2%98%E7%9A%84%EF%BC%9F",tabindex:"-1"},v=o("#"),C=o(" 微前端怎么解决这些问题的？"),P=t("p",null,"微前端，可看作是「微服务」派生出来的一个概念。也有点像 OOP(Object-Oriented Programing) 中的单一原则（Single Responsibility Principle），一个类、方法只做一件事情。",-1),j=t("p",null,"讲到一件事情，我们就不得不分析业务，把业务剥离开来，抽成一个一个的服务。然后再通过一些技术手段，来整合不同的服务。",-1),D=t("p",null,"先简单分享一下我想到的几种方式：",-1),q=t("ol",null,[t("li",null,"用 npm package / git submodule 来管理"),t("li",null,"用 iframe 加载"),t("li",null,"开发 micro frontend 框架")],-1),L={id:"npm-package-%2F-git-submodule",tabindex:"-1"},T=o("#"),M=o(" npm package / git submodule"),O=t("p",null,"这种方式，用起来就比较简单，就和用普通的 js 模块一样，除了分离出代码，没有任何其它优势。",-1),V={id:"iframe",tabindex:"-1"},I=o("#"),$=o(" iframe"),G=t("p",null,"因为 iframe 的特性，天然的隔离性，优势也比较明显：运行环境隔离、独立发布。但同时缺点也很多：加载慢，性能堪忧、隔离性太强，以至于 会话状态共享都成了一个问题。",-1),K=t("p",null,"整体思考下来，iframe 除了隔离性好之外，也没有什么优势。",-1),Q={id:"micro-frontend-%E6%A1%86%E6%9E%B6",tabindex:"-1"},U=o("#"),R=o(" micro frontend 框架"),W=t("p",null,"框架就有很多啦，我选了三个不同的轮子，简单的捋一捋里面的原理。",-1),N=o("Luigi: "),z=o("https://github.com/SAP/luigi"),Y=o(" ，利用 iframe 构建的微服务框架"),H=o("EMP: "),J=o("https://github.com/efoxTeam/emp"),X=o(" ，使用 webpack5 的 module federation 技术"),Z=o("Single-SPA: "),nn=o("https://github.com/Single-SPA/Single-SPA"),an=o(" ，路由框架"),sn=o("qiankun: "),en=o("https://github.com/umijs/qiankun"),tn=o(" ，建立在 Single-SPA 之上的解决方案"),pn={id:"%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6%E4%BD%93%E9%AA%8C",tabindex:"-1"},rn=o("#"),on=o(" 微前端框架体验"),ln=t("p",null,"简单的写写每个框架的处理方式，不一定全对，但一定不会全错 😃。",-1),un={id:"luigi",tabindex:"-1"},cn=o("#"),En=o(" Luigi"),dn=o("先看看 "),kn=o("Luigi"),bn=o("，一个利用 "),hn=t("code",null,"iframe",-1),gn=o(" 构建的后台微服务框架。可看作是一个路由框架，主要用于构建后台配置页面。"),fn=o("通过 "),mn=t("code",null,"Luigi.setConfig",-1),An=o(" API 来配置网站的路由、授权、导航、本地化等。然后 "),Bn=o("Luigi"),wn=o(" 框架通过 iframe 切换不同的路由。"),_n=o("消息机制也是通过 "),Sn=t("code",null,"window.postMessage",-1),Fn=o(" 实现，源代码 "),yn=o("code"),xn=r('<div class="language-js line-numbers-mode"><pre><code>  <span class="token function">sendPostMessageToLuigiCore</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>origin<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>\n        <span class="token string">&#39;There is no target origin set. You can specify the target origin by calling LuigiClient.setTargetOrigin(&quot;targetorigin&quot;) in your micro frontend.&#39;</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',1),vn=o("路由也是通过封装的 "),Cn=t("code",null,"LuigiClient.linkManager",-1),Pn=o("、"),jn=t("code",null,"Luigi.navigation",-1),Dn=o(" 来管理跳转，实际原理也是通过发送消息来实现的，源代码 "),qn=o("code"),Ln=r('<div class="language-js line-numbers-mode"><pre><code>  <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> sessionId<span class="token punctuation">,</span> preserveView<span class="token punctuation">,</span> modalSettings<span class="token punctuation">,</span> splitViewSettings<span class="token punctuation">,</span> drawerSettings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>errorSkipNavigation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>errorSkipNavigation <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>modalSettings <span class="token operator">&amp;&amp;</span> splitViewSettings <span class="token operator">&amp;&amp;</span> drawerSettings<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>\n        <span class="token string">&#39;modalSettings, splitViewSettings and drawerSettings cannot be used together. Only modal setting will be taken into account.&#39;</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>preserveView <span class="token operator">=</span> preserveView<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> hasIntent <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;?intent=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> navigationOpenMsg <span class="token operator">=</span> <span class="token punctuation">{</span>\n      msg<span class="token operator">:</span> <span class="token string">&#39;luigi.navigation.open&#39;</span><span class="token punctuation">,</span>\n      sessionId<span class="token operator">:</span> sessionId<span class="token punctuation">,</span>\n      params<span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        link<span class="token operator">:</span> path<span class="token punctuation">,</span>\n        relative<span class="token operator">:</span> relativePath<span class="token punctuation">,</span>\n        intent<span class="token operator">:</span> hasIntent<span class="token punctuation">,</span>\n        modal<span class="token operator">:</span> modalSettings<span class="token punctuation">,</span>\n        splitView<span class="token operator">:</span> splitViewSettings<span class="token punctuation">,</span>\n        drawer<span class="token operator">:</span> drawerSettings\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    helpers<span class="token punctuation">.</span><span class="token function">sendPostMessageToLuigiCore</span><span class="token punctuation">(</span>navigationOpenMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>其它，如生命周期等，也是类似通过发送消息的方式来实现的。</p><p>整体体验下来，不是特别方便，代码有一定的侵入性。由于 iframe 的特性，每次切换，都要请求一下资源，略慢。</p>',3),Tn=o("Luigi"),Mn=o(" 体验的差不多了，下一个 "),On=o("EMP"),Vn={id:"emp",tabindex:"-1"},In=o("#"),$n=o(" EMP"),Gn=o("通过官方仓库 "),Kn=o("EMP"),Qn=o("，中"),Un=t("code",null,"projects",-1),Rn=o(" 里面的示例，体验了一下。"),Wn=t("p",null,"整体体验下来，开发比较流畅，但是文档目前不太完善。",-1),Nn=o("主要原理是通过 "),zn=o("webpack5"),Yn=o(" 的 "),Hn=o("module-federation"),Jn=o(" 来加载远程模块。"),Xn=o("因此高度依赖 "),Zn=o("webpack5"),na=o("，对于其它打包工具,目前还不能很好的兼容。如果仅仅是当做路由框架，也是可行的。"),aa=t("p",null,"因为直接暴露模块，因此没有通信和生命周期的的问题。但是样式隔离问题依旧存在，全局变量污染问题也存在。",-1),sa=o("下一个 "),ea=o("Single-SPA"),ta={id:"single-spa",tabindex:"-1"},pa=o("#"),ra=o(" Single-SPA"),oa=o("粗略体验，文档完善，社区也很活跃。而且有 "),la=o("SSR"),ia=o(" 方案。"),ua=o("Single-SPA"),ca=o(" 整个文档，都在强调 "),Ea=o("Single-SPA"),da=o(" 是一种思路，具体实现方案，可自行选择。例如 "),ka=o("qiankun"),ba=o(" 和 "),ha=o("EMP"),ga=o(" 都可看作其一种具体的实现方案。"),fa=o("Single-SPA"),ma=o(" 建议用加载 运行时模块(runtime module) 的方式，来组织「微前端」中不同的服务，例如用，尚在提案阶段的 "),Aa=o("import-maps"),Ba=o("，"),wa=o("import-maps 兼容性"),_a=o(" 或者 "),Sa=o("webpack-module-federation"),Fa=o(" 功能。"),ya=o("官方会在处理「微前端」相关问题时，都会推荐一种实现方案，具体方案建议阅读 "),xa=o("Single-SPA"),va=o(" 文档。"),Ca=o("下一个 "),Pa=o("QianKun"),ja=o("，一个 "),Da=o("Single-SPA"),qa=o(" 的具体实现方案。"),La={id:"qiankun",tabindex:"-1"},Ta=o("#"),Ma=o(" QianKun"),Oa=o("关于状态共享，"),Va=o("QianKun"),Ia=o(" 实现了一个 "),$a=o("Global State"),Ga=o(" 方案，推荐阅读。"),Ka=o("乾坤用的是 "),Qa=o("import-html-entry"),Ua=o(" 的方式。"),Ra={id:"%E5%BE%AE%E5%89%8D%E7%AB%AF%E9%9C%80%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98",tabindex:"-1"},Wa=o("#"),Na=o(" 微前端需要解决的问题"),za=t("ol",null,[t("li",null,"服务更新问题"),t("li",null,"通信问题"),t("li",null,"样式隔离问题"),t("li",null,"环境隔离问题"),t("li",null,"如何分离团队和开发")],-1),Ya={id:"%E6%9C%8D%E5%8A%A1%E6%9B%B4%E6%96%B0%E9%97%AE%E9%A2%98",tabindex:"-1"},Ha=o("#"),Ja=o(" 服务更新问题"),Xa=t("p",null,"关于更新的问题，进一步的问题可以提炼成：关于「微前端」中的不同服务，是否需要主应用来控制版本呢？",-1),Za=t("p",null,"我认为这个答案是否定的，不需要主应用来控制里面服务的版本，也就是主应用里面的服务，无论什么时候都是最新的版本，主应用不关心里面的服务的版本。",-1),ns=t("p",null,"由此，也可确定，服务之间，应该尽可能的减少通信。因为频繁的通信，即可导致耦合较大，就必须要有版本控制，否则，出问题的概率就比较大。",-1),as={id:"%E9%80%9A%E4%BF%A1%E9%97%AE%E9%A2%98",tabindex:"-1"},ss=o("#"),es=o(" 通信问题"),ts=t("p",null,"有上一个问题的讨论结果，可得出，通信功能只要满足能用即可。并不要实现特别复杂的机制。",-1),ps=t("p",null,"由不同「微前端」方案，也衍生出不同的通信方案：",-1),rs=o("Luigi"),os=o(" 用到的 "),ls=t("code",null,"window.postMessage",-1),is=o("Single-SPA"),us=o(" 提到的 "),cs=t("code",null,"window.addEventListener/dispatchEvent",-1),Es=o(),ds=o("source"),ks=o("EMP"),bs=o(" 中自定义的模块，则可直接暴露函数"),hs={id:"%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB%E9%97%AE%E9%A2%98",tabindex:"-1"},gs=o("#"),fs=o(" 样式隔离问题"),ms=o("推荐阅读 "),As=o("Single-SPA-CSS"),Bs=o("，样式隔离的一些指导和分析。"),ws=o("Single-SPA-CSS"),_s=o(" 推荐 一份公用的样式，然后每个服务的样式，都自己去借助工具或者一些技术做到自我隔离。例如 "),Ss=o("css-module"),Fs=o(" 技术，或者 "),ys=t("code",null,"Vue",-1),xs=o(" 的 "),vs=t("code",null,"scoped",-1),Cs=o(" 方案。"),Ps=o("但如果使用像 "),js=o("Luigi"),Ds=o(" 这样利用 "),qs=t("code",null,"iframe",-1),Ls=o(" 的框架，则天然支持样式隔离。"),Ts={id:"%E7%8E%AF%E5%A2%83%E9%9A%94%E7%A6%BB%E9%97%AE%E9%A2%98",tabindex:"-1"},Ms=o("#"),Os=o(" 环境隔离问题"),Vs=t("p",null,"环境隔离，主要问题是全局环境变量的问题。要处理这个问题，第一个想到的肯定就是，人工约定一个格式，先到先得。这种方式够用，但不够友好。",-1),Is=t("p",null,[o("如果是 "),t("code",null,"iframe"),o("，则没有这个问题。")],-1),$s=o("看 "),Gs=o("QianKun"),Ks=o(" 的源代码的时候，看到其用到了 "),Qs=t("code",null,"Sandbox",-1),Us=o(" 这个东西。仔细读了读，实际上是通过 "),Rs=o("import-html-entry"),Ws=o(" 的 "),Ns=o("getExecutableScript"),zs=o(" 实现的。"),Ys=r('<div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br></div><pre><code><span class="token keyword">function</span> <span class="token function">getExecutableScript</span><span class="token punctuation">(</span><span class="token parameter">scriptSrc<span class="token punctuation">,</span> scriptText<span class="token punctuation">,</span> proxy<span class="token punctuation">,</span> strictGlobal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> sourceUrl <span class="token operator">=</span> <span class="token function">isInlineCode</span><span class="token punctuation">(</span>scriptSrc<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;&#39;</span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">//# sourceURL=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scriptSrc<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">`</span></span>\n\n  <span class="token comment">// 通过这种方式获取全局 window，因为 script 也是在全局作用域下运行的，所以我们通过 window.proxy 绑定时也必须确保绑定到全局 window 上</span>\n  <span class="token comment">// 否则在嵌套场景下， window.proxy 设置的是内层应用的 window，而代码其实是在全局作用域运行的，会导致闭包里的 window.proxy 取的是最外层的微应用的 proxy</span>\n  <span class="token keyword">const</span> globalWindow <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> eval<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;window&#39;</span><span class="token punctuation">)</span>\n  globalWindow<span class="token punctuation">.</span>proxy <span class="token operator">=</span> proxy\n  <span class="token comment">// TODO 通过 strictGlobal 方式切换 with 闭包，待 with 方式坑趟平后再合并</span>\n  <span class="token keyword">return</span> strictGlobal\n    <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">;(function(window, self, globalThis){with(window){;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scriptText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sourceUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);</span><span class="token template-punctuation string">`</span></span>\n    <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">;(function(window, self, globalThis){;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scriptText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sourceUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);</span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>核心代码，就是 <code>;(function(window, self, globalThis){;${scriptText}\\n${sourceUrl}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy)</code> 这一句了。在运行代码的时候，通过闭包机制，替换 <code>window,self,globalThis</code> 三个变量。</p><p>我个人认为，这个方面就看情况了，如果开箱支持，那就用。如果不支持，那也没有必要非得用这种方式，就「约定」的方式也挺好的， 也没什么大问题。</p>',3),Hs={id:"%E5%A6%82%E4%BD%95%E5%88%86%E7%A6%BB%E5%9B%A2%E9%98%9F%E5%92%8C%E5%BC%80%E5%8F%91",tabindex:"-1"},Js=o("#"),Xs=o(" 如何分离团队和开发"),Zs=t("p",null,"这个问题，想想都觉得不简单。我也只有吹吹自己的想法了。毕竟没有机会实践。",-1),ne={id:"%E9%9C%80%E8%A6%81%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%90%97%EF%BC%9F",tabindex:"-1"},ae=o("#"),se=o(" 需要微前端吗？"),ee=t("p",null,"现在，对微前端有了一个整体的认识，我们真的需要微前端吗？",-1),te=t("p",null,"这一点，说点软文吧，不管怎么样，还是要结合业务和实际情况认真考虑「微前端」带来的优势是否足够大。",-1),pe={id:"%E6%8E%A8%E8%8D%90%E9%98%85%E8%AF%BB",tabindex:"-1"},re=o("#"),oe=o(" 推荐阅读"),le=o("micro-frontends"),ie=o("，一篇对「微前端」简单介绍的文章。"),ue=o("martinfowler-micro-frontends"),ce=o("，分析「微前端」的优劣势，和一些实现方案以及细节处理方式。"),Ee=o("qiankun-技术圆桌"),de=o("，探讨「微前端」的目的，使命。"),ke=o("Single-SPA Concept"),be=o("，「微前端」概念介绍，以及开发方向指导。"),he=o("Single-SPA Recommended-setup"),ge=o("，「微前端」推荐实现方案。"),fe={expose:[],setup:r=>(a({title:"微前端",meta:[{property:"og:title",content:"微前端"}]}),(a,r)=>{const o=n;return s(),e("div",l,[i,t("h2",u,[t(o,{class:"header-anchor",href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BE%AE%E5%89%8D%E7%AB%AF%EF%BC%9F","aria-hidden":"true"},{default:p((()=>[c])),_:1}),E]),t("p",null,[d,t(o,{href:"https://micro-frontends.org/",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[k])),_:1}),b]),h,t("h2",g,[t(o,{class:"header-anchor",href:"#%E9%82%A3%E4%B9%88%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%88%B0%E5%BA%95%E8%A7%A3%E5%86%B3%E7%9A%84%E6%98%AF%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%EF%BC%9F","aria-hidden":"true"},{default:p((()=>[f])),_:1}),m]),A,t("p",null,[B,t(o,{href:"https://www.yuque.com/kuitos/gky7yw/rhduwc",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[w])),_:1}),_]),S,F,y,t("h2",x,[t(o,{class:"header-anchor",href:"#%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E8%BF%99%E4%BA%9B%E9%97%AE%E9%A2%98%E7%9A%84%EF%BC%9F","aria-hidden":"true"},{default:p((()=>[v])),_:1}),C]),P,j,D,q,t("h3",L,[t(o,{class:"header-anchor",href:"#npm-package-%2F-git-submodule","aria-hidden":"true"},{default:p((()=>[T])),_:1}),M]),O,t("h3",V,[t(o,{class:"header-anchor",href:"#iframe","aria-hidden":"true"},{default:p((()=>[I])),_:1}),$]),G,K,t("h3",Q,[t(o,{class:"header-anchor",href:"#micro-frontend-%E6%A1%86%E6%9E%B6","aria-hidden":"true"},{default:p((()=>[U])),_:1}),R]),W,t("ul",null,[t("li",null,[N,t(o,{href:"https://github.com/SAP/luigi",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[z])),_:1}),Y]),t("li",null,[H,t(o,{href:"https://github.com/efoxTeam/emp",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[J])),_:1}),X]),t("li",null,[Z,t(o,{href:"https://github.com/Single-SPA/Single-SPA",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[nn])),_:1}),an]),t("li",null,[sn,t(o,{href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[en])),_:1}),tn])]),t("h2",pn,[t(o,{class:"header-anchor",href:"#%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6%E4%BD%93%E9%AA%8C","aria-hidden":"true"},{default:p((()=>[rn])),_:1}),on]),ln,t("h3",un,[t(o,{class:"header-anchor",href:"#luigi","aria-hidden":"true"},{default:p((()=>[cn])),_:1}),En]),t("p",null,[dn,t(o,{href:"https://github.com/SAP/luigi",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[kn])),_:1}),bn,hn,gn]),t("p",null,[fn,t(o,{href:"https://docs.luigi-project.io/docs/luigi-core-api?section=luigi-config",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[mn])),_:1}),An,t(o,{href:"https://github.com/SAP/luigi",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Bn])),_:1}),wn]),t("p",null,[_n,Sn,Fn,t(o,{href:"https://github.com/SAP/luigi/blob/883c3924cf2ae83fce400cbfd7bf84f8c11359d7/client/src/helpers.js#L111-L119",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[yn])),_:1})]),xn,t("p",null,[vn,Cn,Pn,jn,Dn,t(o,{href:"https://github.com/SAP/luigi/blob/883c3924cf2ae83fce400cbfd7bf84f8c11359d7/client/src/linkManager.js#L56-L83",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[qn])),_:1})]),Ln,t("p",null,[t(o,{href:"https://github.com/SAP/luigi",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Tn])),_:1}),Mn,t(o,{href:"https://github.com/efoxTeam/emp",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[On])),_:1})]),t("h3",Vn,[t(o,{class:"header-anchor",href:"#emp","aria-hidden":"true"},{default:p((()=>[In])),_:1}),$n]),t("p",null,[Gn,t(o,{href:"https://github.com/efoxTeam/emp",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Kn])),_:1}),Qn,Un,Rn]),Wn,t("p",null,[Nn,t(o,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[zn])),_:1}),Yn,t(o,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Hn])),_:1}),Jn]),t("p",null,[Xn,t(o,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Zn])),_:1}),na]),aa,t("p",null,[sa,t(o,{href:"https://github.com/single-spa/single-spa",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ea])),_:1})]),t("h3",ta,[t(o,{class:"header-anchor",href:"#single-spa","aria-hidden":"true"},{default:p((()=>[pa])),_:1}),ra]),t("p",null,[oa,t(o,{href:"https://single-spa.js.org/docs/ssr-overview",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[la])),_:1}),ia]),t("p",null,[t(o,{href:"https://github.com/single-spa/single-spa",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ua])),_:1}),ca,t(o,{href:"https://github.com/single-spa/single-spa",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Ea])),_:1}),da,t(o,{href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ka])),_:1}),ba,t(o,{href:"https://github.com/efoxTeam/emp",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ha])),_:1}),ga]),t("p",null,[t(o,{href:"https://github.com/single-spa/single-spa",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[fa])),_:1}),ma,t(o,{href:"https://github.com/WICG/import-maps",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Aa])),_:1}),Ba,t(o,{href:"https://caniuse.com/import-maps",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[wa])),_:1}),_a,t(o,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Sa])),_:1}),Fa]),t("p",null,[ya,t(o,{href:"https://github.com/single-spa/single-spa",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[xa])),_:1}),va]),t("p",null,[Ca,t(o,{href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Pa])),_:1}),ja,t(o,{href:"https://github.com/single-spa/single-spa",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Da])),_:1}),qa]),t("h3",La,[t(o,{class:"header-anchor",href:"#qiankun","aria-hidden":"true"},{default:p((()=>[Ta])),_:1}),Ma]),t("p",null,[Oa,t(o,{href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Va])),_:1}),Ia,t(o,{href:"https://qiankun.umijs.org/api#initglobalstatestate",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[$a])),_:1}),Ga]),t("p",null,[Ka,t(o,{href:"https://github.com/kuitos/import-html-entry",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Qa])),_:1}),Ua]),t("h2",Ra,[t(o,{class:"header-anchor",href:"#%E5%BE%AE%E5%89%8D%E7%AB%AF%E9%9C%80%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98","aria-hidden":"true"},{default:p((()=>[Wa])),_:1}),Na]),za,t("h3",Ya,[t(o,{class:"header-anchor",href:"#%E6%9C%8D%E5%8A%A1%E6%9B%B4%E6%96%B0%E9%97%AE%E9%A2%98","aria-hidden":"true"},{default:p((()=>[Ha])),_:1}),Ja]),Xa,Za,ns,t("h3",as,[t(o,{class:"header-anchor",href:"#%E9%80%9A%E4%BF%A1%E9%97%AE%E9%A2%98","aria-hidden":"true"},{default:p((()=>[ss])),_:1}),es]),ts,ps,t("ol",null,[t("li",null,[t(o,{href:"https://github.com/SAP/luigi",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[rs])),_:1}),os,ls]),t("li",null,[t(o,{href:"https://github.com/single-spa/single-spa",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[is])),_:1}),us,cs,Es,t(o,{href:"https://single-spa.js.org/docs/recommended-setup/#ui-state",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ds])),_:1})]),t("li",null,[t(o,{href:"https://github.com/efoxTeam/emp",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ks])),_:1}),bs])]),t("h3",hs,[t(o,{class:"header-anchor",href:"#%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB%E9%97%AE%E9%A2%98","aria-hidden":"true"},{default:p((()=>[gs])),_:1}),fs]),t("p",null,[ms,t(o,{href:"https://single-spa.js.org/docs/ecosystem-css",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[As])),_:1}),Bs]),t("p",null,[t(o,{href:"https://single-spa.js.org/docs/ecosystem-css",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ws])),_:1}),_s,t(o,{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Ss])),_:1}),Fs,ys,xs,vs,Cs]),t("p",null,[Ps,t(o,{href:"https://github.com/SAP/luigi",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[js])),_:1}),Ds,qs,Ls]),t("h3",Ts,[t(o,{class:"header-anchor",href:"#%E7%8E%AF%E5%A2%83%E9%9A%94%E7%A6%BB%E9%97%AE%E9%A2%98","aria-hidden":"true"},{default:p((()=>[Ms])),_:1}),Os]),Vs,Is,t("p",null,[$s,t(o,{href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Gs])),_:1}),Ks,Qs,Us,t(o,{href:"https://github.com/kuitos/import-html-entry",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Rs])),_:1}),Ws,t(o,{href:"https://github.com/kuitos/import-html-entry/blob/ab3e788ee868177ecf407f79b00d52ca2e2cdd47/src/index.js#L52-L63",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Ns])),_:1}),zs]),Ys,t("h3",Hs,[t(o,{class:"header-anchor",href:"#%E5%A6%82%E4%BD%95%E5%88%86%E7%A6%BB%E5%9B%A2%E9%98%9F%E5%92%8C%E5%BC%80%E5%8F%91","aria-hidden":"true"},{default:p((()=>[Js])),_:1}),Xs]),Zs,t("h2",ne,[t(o,{class:"header-anchor",href:"#%E9%9C%80%E8%A6%81%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%90%97%EF%BC%9F","aria-hidden":"true"},{default:p((()=>[ae])),_:1}),se]),ee,te,t("h2",pe,[t(o,{class:"header-anchor",href:"#%E6%8E%A8%E8%8D%90%E9%98%85%E8%AF%BB","aria-hidden":"true"},{default:p((()=>[re])),_:1}),oe]),t("ul",null,[t("li",null,[t(o,{href:"https://micro-frontends.org/",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[le])),_:1}),ie]),t("li",null,[t(o,{href:"https://martinfowler.com/articles/micro-frontends.html",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ue])),_:1}),ce]),t("li",null,[t(o,{href:"https://www.yuque.com/kuitos/gky7yw/rhduwc",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[Ee])),_:1}),de]),t("li",null,[t(o,{href:"https://single-spa.js.org/docs/microfrontends-concept",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[ke])),_:1}),be]),t("li",null,[t(o,{href:"https://single-spa.js.org/docs/recommended-setup",target:"_blank",rel:"noopener noreferrer"},{default:p((()=>[he])),_:1}),ge])])])})};export default fe;
