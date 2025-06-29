---
title: Control the concurrency of workflows and jobs
shortTitle: Concurrency
intro: Run a single job at a time.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-concurrency
  - /actions/writing-workflows/choosing-what-your-workflow-does/using-concurrency
  - /early-access/actions/running-additional-jobs-in-github-actions
  - /actions/writing-workflows/choosing-what-your-workflow-does/control-the-concurrency-of-workflows-and-jobs
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

By default, {% data variables.product.prodname_actions %} allows multiple jobs within the same workflow, multiple workflow runs within the same repository, and multiple workflow runs across a repository owner's account to run concurrently. This means that multiple instances of the same workflow or job can run at the same time, performing the same steps.

{% data variables.product.prodname_actions %} also allows you to disable concurrent execution. This can be useful for controlling your account’s or organization’s resources in situations where running multiple workflows or jobs at the same time could cause conflicts or consume more Actions minutes and storage than expected.

For example, the ability to run workflows concurrently means that if multiple commits are pushed to a repository in quick succession, each push could trigger a separate workflow run, and these runs will execute concurrently.

## Using concurrency in different scenarios

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% ifversion github-runner-dashboard %}

## Monitoring your current jobs in your organization or enterprise

{% data reusables.actions.github-hosted-runners-check-concurrency %}
{% endif %}
