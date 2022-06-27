# MD
<div class="article">       
<!-- 作者区域 -->
<div class="author">
<div class="info">
<!-- 文章内容 -->
<div data-note-content="" class="show-content">
<div class="show-content-free">
<p>.md即markdown文件的基本常用编写语法,是一种快速标记、快速排版语言，现在很多前段项目中的说明文件readme等都是用.md文件编写的，而且很多企业也在在鼓励使用这种编辑方式，特别作为一个前端从业者更要学会使用这种语言。下面就简单和大家分享一些.md基本语法</p>
<h4>一、基本符号：* - +. &gt;</h4>
<p>基本上所有的markdown标记都是基于这四个符号或组合，需要注意的是，如果以基本符号开头的标记，注意基本符号后有一个用于分割标记符和内容的空格。</p>
<h4>二、标题</h4>
<p>1.前面带#号，后面带文字，分别表示h1-h6,只到h6，而且h1下面会有一条横线</p>
<pre class="hljs bash"><code class="bash"><span class="hljs-comment"># 一级标题</span>
<span class="hljs-comment">## 二级标题</span>
<span class="hljs-comment">### 三级标题</span>
<span class="hljs-comment">#### 四级标题</span>
<span class="hljs-comment">##### 五级标题</span>
<span class="hljs-comment">###### 六级标题</span>
</code></pre>
<p>2.相当于标签闭合</p>
<pre class="hljs bash"><code class="bash"><span class="hljs-comment"># 一级标题 #</span>
<span class="hljs-comment">## 二级标题 ##</span>
<span class="hljs-comment">### 三级标题 ###</span>
<span class="hljs-comment">#### 四级标题 ####</span>
<span class="hljs-comment">##### 五级标题 #####</span>
<span class="hljs-comment">###### 六级标题 #####</span>
</code></pre>
<p>效果如下：</p>

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
</div>
<h4>三、列表</h4>
<ol>
<li>无序列表</li>
</ol>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-comment">//形式一</span>
+ a
+ b
+ c
<span class="hljs-comment">//形式二</span>
- d
- e
- f
<span class="hljs-comment">//形式三</span>
* g
* h
* i
</code></pre>
<p></p>
<p></p>
以上三种形式，效果其实都是一样的：

//形式一
+ a
+ b
+ c

//形式二
- d
- e
- f

//形式三
* g
* h
* i

<ol start="2">
<li>有序列表</li>
</ol>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-comment">//正常形式</span>
<span class="hljs-number">1.</span> abc
<span class="hljs-number">2.</span> bcd
<span class="hljs-number">3.</span> cde
<span class="hljs-comment">//错序效果</span>
<span class="hljs-number">2.</span> fgh
<span class="hljs-number">3.</span> ghi
<span class="hljs-number">5.</span> hij
</code></pre>
<p></p>
<p></p>
效果

//正常形式
1. abc
2. bcd
3. cde

//错序效果
2. fgh
3. ghi
5. hij

</div>
<blockquote>
<p>如图，注意，数字后面的点只能是英文的点，有序列表的序号是根据第一行列表的数字顺序来的，<br>
错序列表的序号本来是序号是乱的， 但是还是显示 2 3 5</p>
</blockquote>
<ol start="3">
<li>嵌套列表</li>
</ol>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-comment">//无序列表嵌套</span>
+ <span class="hljs-number">123</span>
    + abc
    + bcd
    + cde
+ <span class="hljs-number">465</span>
+ <span class="hljs-number">789</span>
<span class="hljs-comment">//有序列表嵌套</span>
<span class="hljs-number">1.</span> abcd
    <span class="hljs-number">1.</span> abcde
    <span class="hljs-number">2.</span> abcde
    <span class="hljs-number">3.</span> abcde
<span class="hljs-number">2.</span> bcde
<span class="hljs-number">3.</span> cdef
</code></pre>
<p></p>
<p></p>
效果图：

//无序列表嵌套
+ 123
    + abc
    + bcd
    + cde
+ 465
+ 789

//有序列表嵌套
1. abcd
    1. abcde
    2. abcde
    3. abcde
2. bcde
3. cdef

</div>
<div class="image-caption">嵌套列表.png</div>
</div>
<blockquote>
<p>列表可以嵌套，使用时在嵌套列表前按 tab 或 空格 来缩进,去控制列表的层数</p>
</blockquote>
<h4>四、引用说明区块</h4>
<p>对某个部分做的内容做一些说明或者引用某某的话等，可以用这个语法。</p>
<ol>
<li>正常形式</li>
</ol>
<pre class="hljs undefined"><code>&gt; 引用内容、说明内容。在语句前面加一个 &gt; ，注意是英文的那个右尖括号，注意空格，引用因为是一个区块，理论上是应该什么内容都可以放，比如说：标题，列表，引用等等。
</code></pre>
<p></p>
<p></p>
效果图：

> 引用内容、说明内容。在语句前面加一个 > ，注意是英文的那个右尖括号，注意空格，引用因为是一个区块，理论上是应该什么内容都可以放，比如说：标题，列表，引用等等。
</div>
<ol start="2">
<li>嵌套区块<br>
这里我只介绍一下我常用的方法，也是个人认为比较规范的一种方法，就是给区块的下一级区块多加一个右尖括号</li>
</ol>
<pre class="hljs ruby"><code class="ruby">&gt; 一级引用
<span class="hljs-meta">&gt;&gt;</span> 二级引用
<span class="hljs-meta">&gt;&gt;</span>&gt; 三级引用
<span class="hljs-meta">&gt;&gt;</span>&gt;&gt; 四级引用
<span class="hljs-meta">&gt;&gt;</span>&gt;&gt;&gt; 五级引用
<span class="hljs-meta">&gt;&gt;</span>&gt;&gt;&gt;&gt; 六级引用
</code></pre>
<p></p>
<p></p>
效果图：

> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
>>>>>> 六级引用
</div>
<div class="image-caption">嵌套区块.png</div>
</div>
<h4>五、代码块</h4>
<p>在发布一些技术文章会涉及展示代码的问题，这时候代码块就显得尤为重要。</p>
<ol>
<li>少量代码，单行使用，直接用`包裹起来就行了</li>
</ol>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-string">` shaoliangdaima,danhangshiyong `</span>
</code></pre>
<p></p>
<p></p>
效果图：

` shaoliangdaima,danhangshiyong `
</div>
<div class="image-caption">单行代码块.png</div>
</div>
<ol start="2">
<li>大量代码，需要多行使用，用```包裹起来</li>
</ol>
<pre class="hljs javascript"><code class="javascript">    <span class="hljs-string">``</span><span class="hljs-string">`
        daliangdaima,xuyaoduohangshiyong
        daliangdaima,xuyaoduohangshiyong
        daliangdaima,xuyaoduohangshiyong
        daliangdaima,xuyaoduohangshiyong
        daliangdaima,xuyaoduohangshiyong
    `</span><span class="hljs-string">``</span>
</code></pre>
<p></p>
<p></p>
效果图：

```
daliangdaima,xuyaoduohangshiyong
daliangdaima,xuyaoduohangshiyong
daliangdaima,xuyaoduohangshiyong
daliangdaima,xuyaoduohangshiyong
daliangdaima,xuyaoduohangshiyong
```

</div>
<div class="image-caption">多行代码.png</div>
</div>
<h4>六、链接</h4>
<ol>
<li>行内式<br>
链接的文字放在[]中，链接地址放在随后的()中，链接也可以带title属性，链接地址后面空一格，然后用引号引起来</li>
</ol>
<pre class="hljs bash"><code class="bash">[简书](https://www.jianshu.com <span class="hljs-string">"创作你的创作"</span>),
是一个创作社区,任何人均可以在其上进行创作。用户在简书上面可以方便的创作自己的作品,互相交流。 
</code></pre>
<ol start="2">
<li>参数式<br>
链接的文字放在[]中，链接地址放在随后的:后，链接地址后面空一格，然后用引号引起来</li>
</ol>
<pre class="hljs cpp"><code class="cpp">[简书]: https:<span class="hljs-comment">//www.jianshu.com "创作你的创作"</span>
[简书]是一个创作社区,任何人均可以在其上进行创作。用户在简书上面可以方便的创作自己的作品,互相交流。
<span class="hljs-comment">//参数定义的其他写法</span>
[简书]: https:<span class="hljs-comment">//www.jianshu.com '创作你的创作'</span>
[简书]: https:<span class="hljs-comment">//www.jianshu.com (创作你的创作)</span>
[简书]: &lt;https:<span class="hljs-comment">//www.jianshu.com&gt; "创作你的创作"</span>
</code></pre>
<p></p>
<p></p>
以上两种方式其效果图都是一样的，如下：

[简书]: https://www.jianshu.com "创作你的创作"
[简书]是一个创作社区,任何人均可以在其上进行创作。用户在简书上面可以方便的创作自己的作品,互相交流。
</div>
<h4>七、图片</h4>
<ol>
<li>行内式<br>
和链接的形式差不多，图片的名字放在[]中，图片地址放在随后的()中，title属性（图片地址后面空一格，然后用引号引起来）,注意的是[]前要加上!</li>
</ol>
<pre class="hljs ruby"><code class="ruby">![my-logo.png](<span class="hljs-symbol">https:</span>/<span class="hljs-regexp">/upload-images.jianshu.io/upload</span>_images/<span class="hljs-number">13623636</span>-<span class="hljs-number">6</span>d878e3d3ef63825.png?imageMogr2/auto-orient/strip%<span class="hljs-number">7</span>CimageView2/<span class="hljs-number">2</span>/w/<span class="hljs-number">1240</span> <span class="hljs-string">"my-logo"</span>)
</code></pre>
<ol start="2">
<li>参数式<br>
图片的文字放在[]中，图片地址放在随后的:后，title属性（图片地址后面空一格，然后用引号引起来）,注意引用图片的时候在[]前要加上!</li>
</ol>
<pre class="hljs javascript"><code class="javascript">[my-logo.png]: https:<span class="hljs-comment">//upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 "my-logo"</span>
![my-logo.png]
<span class="hljs-comment">//参数定义的其他写法</span>
[my-logo.png]: https:<span class="hljs-comment">//upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo'</span>
[my-logo.png]: https:<span class="hljs-comment">//upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 (my-logo)</span>
[my-logo.png]: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">https:</span>//<span class="hljs-attr">upload-images.jianshu.io</span>/<span class="hljs-attr">upload_images</span>/<span class="hljs-attr">13623636-6d878e3d3ef63825.png</span>?<span class="hljs-attr">imageMogr2</span>/<span class="hljs-attr">auto-orient</span>/<span class="hljs-attr">strip</span>%<span class="hljs-attr">7CimageView2</span>/<span class="hljs-attr">2</span>/<span class="hljs-attr">w</span>/<span class="hljs-attr">1240</span>&gt;</span></span> <span class="hljs-string">"my-logo"</span>
</code></pre>
<p></p>
<p></p>
以上两种方式其效果图都是一样的，如下：

[my-logo.png]: https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 "my-logo"
![my-logo.png]
<h4>八、分割线</h4>
<p>分割线可以由* - _（星号，减号，底线）这3个符号的至少3个符号表示，注意至少要3个，且不需要连续，有空格也可以</p>
<pre class="hljs undefined"><code>---
- - -
------
***
* * *
******
___
_ _ _
______
</code></pre>
<p></p>
<p></p>
以上代码的效果图均为：

---

<h4>九、其他</h4>
<ol>
<li>强调字体<br>
一个星号或者是一个下划线包起来，会转换为&lt;em&gt;倾斜，如果是2个，会转换为&lt;strong&gt;加粗</li>
</ol>
<pre class="hljs undefined"><code>*md*    
**md**
_md_   
 __md__
</code></pre>
<p></p>
<p></p>
效果图：

_md_   
__md__
<ol start="2">
<li>转义<br>
基本上和js转义一样,\加需要转义的字符</li>
</ol>
<pre class="hljs undefined"><code>\\
\*
\+
\-
\`
\_
</code></pre>
效果:

\\
\*
\+
\-
\`
\_
<ol start="3">
<li>删除线<br>
用~~把需要显示删除线的字符包裹起来</li>
</ol>
<pre class="hljs undefined"><code>~~删除~~
</code></pre>
<p></p>
<p></p>
效果图：

~~删除~~
<h4>十、表格</h4>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-comment">//例子一</span>
|<span class="hljs-number">123</span>|<span class="hljs-number">234</span>|<span class="hljs-number">345</span>|
|:-|:-:|-:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
<span class="hljs-comment">//例子二</span>
|<span class="hljs-number">123</span>|<span class="hljs-number">234</span>|<span class="hljs-number">345</span>|
|:---|:---:|---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
<span class="hljs-comment">//例子三</span>
<span class="hljs-number">123</span>|<span class="hljs-number">234</span>|<span class="hljs-number">345</span>
:-|:-:|-:
abc|bcd|cde
abc|bcd|cde
abc|bcd|cde
</code></pre>
<blockquote>
<p>上面三个例子的效果一样，由此可得：<br>
1. 表格的格式不一定要对的非常起，但是为了良好的变成风格，尽量对齐是最好的<br>
2. 分割线后面的冒号表示对齐方式，写在左边表示左对齐，右边为右对齐，两边都写表示居中</p>
</blockquote>
<p>效果图如下：

|123|234|345|
|:-|:-:|-:|
|abc|bcd|cde|
|1abc|bcd|cde1|
|1abc|bcd|cde1|

<br>
<br><p></p>
<blockquote>
<p>这篇文章的编写借鉴了很多前辈的经验，同时鉴赏我自己的总结，跟大家一起分享了。<br><em>即使遇到了不幸的灾难，已经开始了的事情决不放弃。</em></p>
</blockquote>