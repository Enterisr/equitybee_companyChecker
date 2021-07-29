const settingsName = "cachedCompanies";
const LocalStorageHandler = {
  setValue: function setValue(key, val) {
    const setting = localStorage.getItem(settingsName);
    try {
      const settingObj = JSON.parse(setting) || {};
      settingObj[key] = val;
      localStorage.setItem(settingsName, JSON.stringify(settingObj));
    } catch (ex) {
      console.error(ex);
    }
  },
  getValue: function getValue(key) {
    const setting = localStorage.getItem(settingsName);
    try {
      const settingObj = JSON.parse(setting);
      return settingObj[key];
    } catch (ex) {
      console.error(ex);
    }
  },
};
export default LocalStorageHandler;
