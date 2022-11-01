# anilist-js [![.github/workflows/test.yml](https://github.com/Yakiyo/anilist-js/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Yakiyo/anilist-js/actions/workflows/test.yml)

Deno module for interacting with the anilist api. This package simplifies making queries from the anilist api. As of now, this package does not support making mutations.

## Usage

Import the module in your code
```ts
import { Anilist } from "https://deno.land/x/anilist_js@0.1.0/mod.ts";

const anilist = new Anilist();
```
The package exports a base class `Anilist`. Initiate the class and use it.

The base anilist class bundles together multiple subclasses, all of which get initiated during initiating the base class. A documentation of the package is available [here](https://deno.land/x/anilist_js?doc). Please refer to the file of each class [here](https://deno.land/x/anilist_js/src) to view it's internal methods and documentations. Return types for functions arent implemented yet as creating interfaces for anilist results is a huge task.

## To be added
- [ ] Support mutations
- [ ] Create interfaces for return types ?

## Credits

This project and its code were inspired by Butterstroke's [Anilist-node](https://github.com/Butterstroke/AniList-Node)

## Author

**anilist-js** © [Yakiyo](https://github.com/Yakiyo). Authored and maintained by Yakiyo.

Released under [MIT](https://opensource.org/licenses/MIT) License.
