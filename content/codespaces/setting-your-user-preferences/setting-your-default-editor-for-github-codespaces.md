---
title: Setting your default editor for GitHub Codespaces
shortTitle: Set the default editor
intro: '{% data reusables.codespaces.about-changing-default-editor %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces
topics:
  - Codespaces
type: how_to
---

On the settings page, you can set your editor preference so that when you create a codespace, or open an existing codespace, it is opened in your choice of:
* {% data variables.product.prodname_vscode %} (desktop application)
* {% data variables.product.prodname_vscode %} (web client application)
* JupyterLab - the web interface for Project Jupyter

{% data reusables.codespaces.template-codespaces-default-editor %}

If you want to use {% data variables.product.prodname_vscode %} as your default editor for {% data variables.product.prodname_github_codespaces %}, you need to install {% data variables.product.prodname_vscode %} and the {% data variables.product.prodname_github_codespaces %} extension for {% data variables.product.prodname_vscode %}. For more information, see the [download page for {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) and the [{% data variables.product.prodname_github_codespaces %} extension on the {% data variables.product.prodname_vscode %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## Setting your default editor

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Editor preference", select the option you want.

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * If you choose **{% data variables.product.prodname_vscode %}**, {% data variables.product.prodname_github_codespaces %} will automatically open in the desktop application when you next create or open a codespace.

     You may need to allow access to both your browser and {% data variables.product.prodname_vscode %} for it to open successfully.<br><br>

   * If you choose **JupyterLab**, the JupyterLab application must be installed in the codespaces you open. {% data reusables.codespaces.jupyterlab-in-default-image %}

## Further reading

* [AUTOTITLE](/codespaces/customizing-your-codespace)
* [AUTOTITLE](/codespaces/managing-your-codespaces)
