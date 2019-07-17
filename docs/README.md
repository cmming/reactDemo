# Headline

> An awesome project.


## 脚手架工具

    npm install -g create-react-app
    
## 初始化项目

    npm init react-app my-app


## 将项目的配置暴露

    npm run eject
    
    
## 配置less

    yarn add less less-loader
    
    
## 安装插件

    react-router-dom
    axios
    less-loader
    
    yarn add react-router-dom axios
    
```javascript

const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.less$/;


{
  test: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'sass-loader'
  ),
},
  //less
{
  test: lessRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
      {
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
      },
      'less-loader'
  ),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
}
```


## 安装 ant 


    yarn add antd react-app-rewired customize-cra


```javascript
//355
["import", {"libraryName": "antd", "libraryDirectory": "es", "style": "css"}], 
```


## 路由的使用(分为 web 和 native)

>React Router




## 高阶组件

> 1.属性代理 2.反向继承

## 多语言的封装
```
cnpm install react-intl -D
```

## 权限路由的控制
