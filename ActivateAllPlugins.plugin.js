/**
 * @name ActivateAllPlugins
 * @author Lordn
 * @description Activates all plugins the user has installed.
 * @version 0.0.1
 */

module.exports = meta => ({

    turnOn(plugin){
        if(!BdApi.Plugins.isEnabled(plugin)){
            BdApi.Plugins.enable(plugin);
        }
    },
    
    start() {
        plugins = BdApi.Plugins.getAll();
        plugins.forEach(this.turnOn);
    },

    stop(){
                
    }
});