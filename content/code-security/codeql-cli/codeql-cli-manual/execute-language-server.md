---
title: execute language-server
versions: # DO NOT MANUALLY EDIT. CHANGES WILL BE OVERWRITTEN BY A 🤖
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
type: reference
product: '{% data reusables.gated-features.codeql %}'
autogenerated: codeql-cli
intro: '[Plumbing] On-line support for the QL language in IDEs.'
redirect_from:
  - /code-security/codeql-cli/manual/execute-language-server
---


<!-- Content after this section is automatically generated -->

{% data reusables.codeql-cli.man-pages-version-note %}

## Synopsis

```shell copy
codeql execute language-server --check-errors=<checkErrors> <options>...
```

## Description

\[Plumbing] On-line support for the QL language in IDEs.

This command is only relevant for authors of QL language extensions for
IDEs. It is started by the IDE extension in the background and
communicates with it through a special protocol on its standard input
and output streams.

## Options

### Primary Options

#### `--check-errors=<checkErrors>`

\[Mandatory] How to check errors. One of: ON\_CHANGE, EXPLICIT.

#### `--search-path=<dir>[:<dir>...]`

This works like the similar option to [codeql query compile](/code-security/codeql-cli/codeql-cli-manual/query-compile) (q.v.).

There are no `--additional-packs` or `--library-path` options, as the
corresponding values are provided online by the IDE extension through
the language server protocol.

(Note: On Windows the path separator is `;`).

#### `--synchronous`

Carry out actions a single main thread rather than in a threaded
executor.

### Common options

#### `-h, --help`

Show this help text.

#### `-J=<opt>`

\[Advanced] Give option to the JVM running the command.

(Beware that options containing spaces will not be handled correctly.)

#### `-v, --verbose`

Incrementally increase the number of progress messages printed.

#### `-q, --quiet`

Incrementally decrease the number of progress messages printed.

#### `--verbosity=<level>`

\[Advanced] Explicitly set the verbosity level to one of errors,
warnings, progress, progress+, progress++, progress+++. Overrides `-v`
and `-q`.

#### `--logdir=<dir>`

\[Advanced] Write detailed logs to one or more files in the given
directory, with generated names that include timestamps and the name of
the running subcommand.

(To write a log file with a name you have full control over, instead
give `--log-to-stderr` and redirect stderr as desired.)

#### `--common-caches=<dir>`

\[Advanced] Controls the location of cached data on disk that will
persist between several runs of the CLI, such as downloaded QL packs and
compiled query plans. If not set explicitly, this defaults to a
directory named `.codeql` in the user's home directory; it will be
created if it doesn't already exist.

Available since `v2.15.2`.
