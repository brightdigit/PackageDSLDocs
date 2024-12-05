# `init` - Initializing a Package

To get started, call the `init` subcommand to create a new Swift Package.

## Parameters

### `type`

* `empty` _default_
* `library`
* `executable`

### `name`

* directory name is _default_

## Options

### `defaultLocalization`

### `supportedPlatforms`

### Examples

```bash
package init
```

```swift
import PackageDescription

let package = Package {
} 
```

```bash
package init --type=library
```

```swift
import PackageDescription

struct DirectoryName: Product, Target {}

let package = Package {
  DirectoryName()
} 
```

```bash
package init --type=executable --name=Bushel
```

```swift
import PackageDescription

struct Bushel: Product, Target {
  var productType: ProductType {
    .executable
  }
}

let package = Package {
  Bushel()
} 
```