var engine = require('store/src/store-engine')
var storages = [
    require('store/storages/localStorage'),
]
var plugins = [
    require('store/plugins/defaults'),
]
var storage = engine.createStore(storages, plugins)

export default storage