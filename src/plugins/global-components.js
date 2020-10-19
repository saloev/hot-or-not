/**
 * Регистрируем глобальгные компоненты
 */
export default (app) => {
  const requireComponent = require.context(
    "../components/base",
    true,
    /Base[A-Z]\w+\.(vue|js)$/,
  );
  requireComponent.keys().forEach((fileName) => {
    let baseComponentConfig = requireComponent(fileName);
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
    const baseComponentName = baseComponentConfig.name
      || fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
    app.component(baseComponentName, baseComponentConfig);
  });
};
