# City Mechanical's Components

Regardless of the design approach that is adopted for future development, it is important to describe the various components that will be used in this project.  These components may be based off of a standard ui framework, such as antd, or a custom built one.  This file aims to cover the heirarchy of the various components within this project, along with a description of how they fit into the atomic design ideology.

## Component Structure

Using atomic design, this project's components can be categorized into 1 of 5 categorys:

1. [Atoms](#Atoms)
2. [Molecules](#Molecules)
3. [Organisms](#Organisms)
4. [Templates](#Templates)
5. [Pages](#Pages)

---

### Atoms

These components represent basic elements which cannot be broken down any further without ceasing to be functional. (ex. `Label`, `InputField`, `Button`, etc.)  The `Atom` components within this project include:

- [Component1](#Component1)

#### Component1

---

### Molecules

These components represent realatively simple UI groups of `Atom` components working together. (ex. A `SearchBar` consisting of an `InputField` with a `Label` and `Button`)  The `Molecule` components within this project include:

- [Component2](#Component2)

#### Component2

---

### Organisms

These components represent realatively complex UI groups of `Molecule` components and/or `Atom` components and/or other `Organism` components working together. (ex. A `Header` consisting of a `Logo` along with a `MenuNav` and `SearchBar`)  The `Molecule` components within this project include:

- [Component3](#Component3)

#### Component3

---

### Templates

These components are page-level objects that are used to structure the project's content. They are abstract components which hold a variety of all previous component types. (ex. `Service-Template` that contains a `Header`, along with a `ServiceDescription` and `ContactForm`, etc.) The `Template` components within this project include:

- [Component4](#Component4)

#### Component4

---

### Pages

These components represent content more than they represent reusable components - specific intances of `Template` components. (ex. `Home`, `Boilers`, `Contact`, etc.)  The `Page` components within this project include:

- [Component5](#Component5)

#### Component5

## References

<http://www.atomicdesign.bradfrost.com/chapter-2/>
<http://github.com/bradfrost/atomic-design/>
