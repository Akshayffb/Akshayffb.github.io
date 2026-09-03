import{_ as a,o as n,c as i,a0 as e}from"./chunks/framework.M3oKIKh_.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/database/database-design.md","filePath":"notes/database/database-design.md"}'),t={name:"notes/database/database-design.md"};function l(p,s,d,h,k,r){return n(),i("div",null,[...s[0]||(s[0]=[e(`<h3 id="docs-notes-database-database-design-md" tabindex="-1"><code>docs/notes/database/database-design.md</code> <a class="header-anchor" href="#docs-notes-database-database-design-md" aria-label="Permalink to &quot;\`docs/notes/database/database-design.md\`&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Database Design</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A relational database stores data in tables.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Important concepts:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Primary key</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Foreign key</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Relationships</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Constraints</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Indexes</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Normalization</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Example relationship:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Customer → Orders → Order Items</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">One customer can have many orders.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">One order can have many order items.</span></span></code></pre></div>`,2)])])}const c=a(t,[["render",l]]);export{E as __pageData,c as default};
