/**介绍：SPA应用就是一个web应用，可理解为：是一种只需要将单个页面加载到服务器之中的web应用程序。
 * 当浏览器向服务器发出第一个请求时，服务器会返回一个index.html文件，它所需的js，css等会在显示时统一加载，部分页面需要时加载。
优点：
1.良好的交互式体验。意思是：用户无需刷新页面，获取数据通过异步ajax获取，页面显示流畅
2.良好的前后端分离模式（MVVM），减轻服务端压力。服务器只需要输出数据就可以，不用管逻辑和页面展示，吞吐能力会提高几倍
3.共用同一套后端程序代码，不用修改就可用于web界面，手机和平板等客户端设备
缺点：
1.不利于SEO优化
2.由于单页应用在一个页面中显示，所以不可以使用浏览器自带的前进后退功能，想要实现页面切换需要自己进行管理
3.首屏加载过慢（初次加载耗时多），原因是：为了实现单页web应用功能及展示效果，在页面初始化的时候就会将js，css等统一加载，部分页面在需要时加载。当然也有解决方法。
解决方法：①使用路由懒加载 ②开启Gzip压缩 ③使用webpack的externals属性把不需要的库文件分离出去，减少打包后文件的大小 ④使用vue的服务端渲染（SSR）
举例spa应用：网易云音乐、QQ音乐等 */

/**单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。
 * 但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。
多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新
单页面的优点：
用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。
单页面缺点：
不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。 */