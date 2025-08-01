---
title: GitHub Mobile
intro: 'Triage, collaborate, and manage your work on {% data variables.product.github %} from your mobile device.'
shortTitle: GitHub Mobile
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
---

## About {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} gives you a way to do high-impact work on {% data variables.product.github %} quickly and from anywhere. {% data variables.product.prodname_mobile %} is a safe and secure way to access your data through a trusted, first-party client application.

With {% data variables.product.prodname_mobile %} you can:

* Manage, triage, and clear notifications
* Read, review, and collaborate on issues and pull requests
* Edit files in pull requests
* Search for, browse, and interact with users, repositories, and organizations
* Receive a push notification when someone mentions your username{% ifversion mobile-code-search %}
* Search through code in a specific repository{% endif %}{% ifversion fpt or ghec %}
* Secure your {% data variables.product.prodname_dotcom_the_website %} account with two-factor authentication
* Verify your sign in attempts on unrecognized devices{% endif %}{% ifversion copilot-chat-for-mobile %}
* Use {% data variables.copilot.copilot_chat %} to ask and receive answers to coding-related questions{% endif %}

The following documentation contains more information about using {% data variables.product.company_short %} features on {% data variables.product.prodname_mobile %}.

* For more information about notifications for {% data variables.product.prodname_mobile %}, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#enabling-push-notifications-with-github-mobile).{% ifversion mobile-code-search %}
* For more information about using {% data variables.product.prodname_dotcom %} code search on {% data variables.product.prodname_mobile %}, see [AUTOTITLE](/search-github/github-code-search/using-github-code-search#using-github-code-search-on-github-mobile).{% endif %}{% ifversion fpt or ghec %}
* For more information on two-factor authentication using {% data variables.product.prodname_mobile %}, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) and [Authenticating using {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication#verifying-with-github-mobile). {% endif %}{% ifversion copilot-chat-for-mobile %}
* For more information about using {% data variables.copilot.copilot_mobile %}, see [AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile).{% endif %}{% ifversion copilot-chat-for-mobile %}
* For more information about using {% data variables.copilot.copilot_extensions %} in {% data variables.product.prodname_mobile %}, see [Extending {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_mobile %}](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github-mobile#extending-copilot-chat-in-github-mobile).{% endif %}

## Installing {% data variables.product.prodname_mobile %}

To install {% data variables.product.prodname_mobile %} for Android or iOS, see [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Managing accounts

You can be simultaneously signed into mobile with multiple accounts on {% data variables.product.prodname_dotcom_the_website %}, on {% data variables.enterprise.data_residency_site %}, and on {% data variables.product.prodname_ghe_server %}. For more information about our different products, see [AUTOTITLE](/get-started/learning-about-github/githubs-plans).

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} may not work with your enterprise if you're required to access your enterprise over VPN.

### Signing in with social login

> [!NOTE]
> Social login is only available for {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_ghe_cloud %} users

You can sign in to {% data variables.product.prodname_mobile %} using a supported social login provider. Currently, only Google is supported for social login on the {% data variables.product.prodname_mobile %} for Android. To use this option, make sure you originally created your {% data variables.product.github %} account using Google.

For iOS users, social login with Google is not supported in {% data variables.product.prodname_mobile %}. Follow the steps below to sign in to {% data variables.product.prodname_mobile %} on iOS using an account that was created with Google:
1. Open the native web browser Safari and sign in to your {% data variables.product.github %} account.
1. Authorize {% data variables.product.prodname_mobile %} in your browser when prompted.
1. If you are unable to sign in through your browser, you can set a password or passkey for your {% data variables.product.github %} account on {% data variables.product.github %}. After setting a password or passkey, use your username and password with two-factor authentication, or a passkey, to sign in to {% data variables.product.prodname_mobile %}.

### Prerequisites for {% data variables.enterprise.data_residency_site %} accounts

To access accounts on {% data variables.enterprise.data_residency %} using {% data variables.product.prodname_mobile %}, you need to install {% data variables.product.prodname_mobile %} with at least version iOS 1.182.0 or Android 1.178.0.

### Prerequisites for {% data variables.product.prodname_ghe_server %} accounts

You must install {% data variables.product.prodname_mobile %} 1.4 or later on your device to use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}.

To use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, {% data variables.product.prodname_dotcom %} must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see {% ifversion ghes %}[AUTOTITLE](/admin/release-notes) and {% endif %}[Managing {% data variables.product.prodname_mobile %} for your enterprise]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %} in the {% data variables.product.prodname_ghe_server %} documentation.{% else %}.{% endif %}

During the {% data variables.release-phases.public_preview %} for {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, you must be signed in with a personal account on {% data variables.product.prodname_dotcom_the_website %}.

### Adding, switching, or signing out of accounts

You can sign into mobile with any {% data variables.product.github %} account, on {% data variables.product.prodname_dotcom_the_website %}, on {% data variables.enterprise.data_residency_domain %}, or on {% data variables.product.prodname_ghe_server %}. At the bottom of the app, long-press **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile**, then tap **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add Enterprise Account**. Follow the prompts to sign in.

After signing in with a second account, you can switch between the accounts you're currently logged into within the app. At the bottom of the app, long-press **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile**, then tap the account you want to switch to.

If you no longer need to access an account using {% data variables.product.prodname_mobile %}, you can sign out of that account. At the bottom of the app, long-press **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile**, swipe left on the account to sign out of, then tap **Sign out**.

Alternatively, once logged into one account, access the account switcher to log into other accounts or log out of an existing account by navigating to the **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile** tab, then tapping {% octicon "gear" aria-hidden="true" aria-label="gear" %}, and then tapping **Manage Accounts**.

## Supported languages for {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} is available in the following languages.

* English
* Spanish
* Japanese
* Brazilian Portuguese
* Simplified Chinese
* Korean
* German

If you configure the language on your device to a supported language, {% data variables.product.prodname_mobile %} will default to the language. You can change the language for {% data variables.product.prodname_mobile %} in {% data variables.product.prodname_mobile %}'s **Settings** menu.

## Managing Universal Links for {% data variables.product.prodname_mobile %} on iOS

{% data variables.product.prodname_mobile %} automatically enables Universal Links for iOS. When you tap any {% data variables.product.github %} link, the destination URL will open in {% data variables.product.prodname_mobile %} instead of Safari. For more information, see [Universal Links](https://developer.apple.com/ios/universal-links/) on the Apple Developer site.

To disable Universal Links, long-press any {% data variables.product.github %} link, then tap **Open**. Every time you tap a {% data variables.product.github %} link in the future for the same {% data variables.product.github %} instance, the destination URL will open in Safari instead of {% data variables.product.prodname_mobile %}.

To re-enable Universal Links, long-press any {% data variables.product.github %} link, then tap **Open in {% data variables.product.github %}**.

## Sharing feedback

You can submit feature requests or other feedback for {% data variables.product.prodname_mobile %} on [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile).

## Opting out of {% data variables.release-phases.public_preview %} releases for iOS

If you're testing a {% data variables.release-phases.public_preview %} release of {% data variables.product.prodname_mobile %} for iOS using TestFlight, you can leave the {% data variables.release-phases.public_preview %} at any time.

1. On your iOS device, open the TestFlight app.
1. Under "Apps," tap **{% data variables.product.prodname_dotcom %}**.
1. At the bottom of the page, tap **Stop Testing**.
