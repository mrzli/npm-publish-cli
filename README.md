# CLI for Publishing to NPM

This is a CLI for publishing a JavaScript/TypeScript NPM project.

## Installation

```bash
npm install @gmjs/npm-publish-cli
```

It can be installed locally, and added to an npm script, for example like this:

```json
{
  "scripts": {
    "pack": "npmpub pack",
    "pub": "npmpub pub"
  }
}
```

## Usage

### Package

This is a prerequisite for publishing.

```
Usage: npmpub pack|a [options]

Package project.

Options:
  -h, --help  display help for command
```

### Publish

```
Usage: npmpub pub|p [options]

Publish npm package.

Options:
  --dry-run   Dry run (fake publish).
  -h, --help  display help for command
```

### Update Version

```
Usage: npmpub update-version|u [options]

Update version.

Options:
  -m, --major  Update major version.
  -n, --minor  Update minor version.
  -p, --patch  Update patch version.
  -h, --help   display help for command
```

## Configuration

Just the options specified in the usage above.
