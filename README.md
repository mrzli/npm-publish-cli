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
    "pub": "npmpub"
  }
}
```

## Usage

```
Usage
  $ npmpub <input>

Options
  --dry-run   Dry run (fake publish).

Examples
  $ npmpub --dry-run
```

## Configuration

Just the options specified in the usage above.
