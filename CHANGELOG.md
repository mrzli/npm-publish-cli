# Change Log

All notable changes to the "npm-publish-cli" will be documented in this file.

## [Unreleased]

## [0.0.5] - 2023-09-29

### Changed

- Publishing is now done using a subcommand `npmpub publish` or `npmpub p` instead of just invoking `npmpub`.
- Update packages to latest versions.
- Update development configurations.
- Use AJV for validating `project.json` files.

### Added

- Add command for packaging project, separated from publishing, but a prerequisite for it. Invoked using `npmpub package` or `npmpub a`.

## [0.0.4] - 2023-08-13

### Changed

- Change so that publish is executed as a main command, not a subcommand.

## [0.0.3] - 2023-08-13

### Fixed

- Fix publishing to work on windows.

## [0.0.2] - 2023-06-04

### Added

- Add `--dry-run` option.

## [0.0.1] - 2023-06-04

### Added

- Implement publish command.
- Add everything else necessary for initial release.

<!--
See: https://common-changelog.org/

## [0.0.1] - 2023-01-01

### Changed

### Added

### Removed

### Fixed
-->
