# electron-update-demo

1. [electron更新服务配置](https://github.com/RSS1102/eletron-update-demo/blob/main/electron-builder.json5)：

   ```json
      publish: {
           provider: 'generic',
           channel: 'latest-win32',
           url: 'http://xxxxxxx/electron/',
       },
   ```

2. [electron更新逻辑](https://github.com/RSS1102/eletron-update-demo/blob/main/electron/update/update.ts) .
3. [更新渲染页面通知](https://github.com/RSS1102/eletron-update-demo/blob/main/src/update/index.tsx) .



---

配置完成之后`npm run build`之后运行打包之后的程序即可。