# url-validator

A simple npm package for URL validation and normalization. If the provided string does not include the `http://` or `https://` protocol, the package automatically adds `http://` to the beginning.

## Installation

```bash
npm install url-validator
```

## Usage

```js
const UrlValidator = require('url-validator');

// Adds http:// if protocol is missing
UrlValidator.getValidUrl('example.com');
// => 'http://example.com'

// Leaves https:// unchanged
UrlValidator.getValidUrl('https://google.com');
// => 'https://google.com'

// Leaves http:// unchanged
UrlValidator.getValidUrl('http://site.org');
// => 'http://site.org'
```

## API

### `UrlValidator.getValidUrl(url)`

Parameters:
- `url` (String) — URL to check

Returns:
- (String) — valid URL with protocol

## Testing

```bash
npm test
```

## Support ☕🤗

If you find this package useful, you can
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/eugeniouglb)

## License

MIT