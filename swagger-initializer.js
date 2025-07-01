window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        url: "https://Hsxxnil.github.io/swagger-ui/swagger-files/gantt.json",
        name: "Gantt"
      },
      {
        url: "https://Hsxxnil.github.io/swagger-ui/swagger-files/crm.json",
        name: "CRM"
      },
      {
        url: "https://Hsxxnil.github.io/swagger-ui/swagger-files/fms.json",
        name: "FMS"
      },
      {
        url: "https://Hsxxnil.github.io/swagger-ui/swagger-files/ai.json",
        name: "AI"
      }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
