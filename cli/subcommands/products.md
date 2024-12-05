# `products` - Managing Package Products

To add, remove, or modify your package's products call the `products` subcommand.

## Subcommands

### `add`

Add a product to the Swift package.

### Parameters

#### `type`

* `library` _default_
* `executable`

#### `name` _required_

#### `moduleName` _lowercase_ of `name` 

### `remove`

Remove a product to the Swift package.

### Parameters

#### `name` _required_

### `modify`

Modify a product to the Swift package.

### Parameters

#### `name` _required_

### Subcommands

#### `target`

##### Arguments

###### `name`

##### Subcommands

###### `add`

Add a target to the product.

###### `remove`

Remove a target to the product.

#### `dependency`

##### Arguments

###### `name`

##### Subcommands

###### `add`

Add a dependency target to the product.

###### `remove`

Remove a dependency target to the product.

##### Options

###### `url`

###### `path`

###### `version`

###### `requirementType`

* `branch`
* `revision`
* `exact`
* `version`

### Examples

#### Adding a Product 

```swift
import PackageDescription

let package = Package {
} 
```

```bash
package products add BushelApp
```

```swift
import PackageDescription

struct BushelApp: Product, Target {}

let package = Package {
    BushelApp()
} 
```

#### Adding a dependency to a product

```bash
package products modify BushelApp dependencies add DataThespian --url=https://github.com/brightdigit/DataThespian.git --version=1.0.0-alpha.5
```

```swift
import PackageDescription

struct DataThespian: PackageDependency, TargetDependency {
  var dependency: Package.Dependency {
    .package(url: "https://github.com/brightdigit/DataThespian.git", from: "1.0.0-alpha.5")
  }
}

struct BushelApp: Product, Target {
  var dependencies: any Dependencies {
    DataThespian()
  }
}

let package = Package {
  BushelApp()
} 
```

```bash
package products modify BushelApp targets add BushelViews
```

```swift
import PackageDescription

struct BushelViews: Target {
  var dependencies: any Dependencies {
  }
}

struct DataThespian: PackageDependency, TargetDependency {
  var dependency: Package.Dependency {
    .package(url: "https://github.com/brightdigit/DataThespian.git", from: "1.0.0-alpha.5")
  }
}

struct BushelApp: Product, Target {
  var dependencies: any Dependencies {
    BushelViews()
    DataThespian()
  }
}

let package = Package {
  BushelApp()
} 
```

```bash
package products remove BushelApp
```

```swift
import PackageDescription

struct BushelViews: Target {
  var dependencies: any Dependencies {
  }
}

struct DataThespian: PackageDependency, TargetDependency {
  var dependency: Package.Dependency {
    .package(url: "https://github.com/brightdigit/DataThespian.git", from: "1.0.0-alpha.5")
  }
}

let package = Package {
} 
```