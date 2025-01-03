# `init` - Initializing a Package

To get started, call the `init` subcommand to create a new Swift Package.

## Parameters

### `path`

Location you'd like to create new Swift Package. The current directory is used otherwise.

### `name`

Overrides the name of the new package and optional product. Otherwise the name of the `path` directory to use.

### `swift-version`

Version of Swift for the Swift Package. Default is **6.0**.

### `package-type`

* `empty` _default_
* `library`
* `executable`
                  
Whether to start with a executable or library product. Default is empty.

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