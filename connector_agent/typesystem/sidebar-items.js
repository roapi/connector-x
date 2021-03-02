initSidebarItems({"trait":[["ParameterizedFunc","A ParameterizedFunc refers to a function that is parameterized on a type T, where type T will be dynaically determined by the variant of a TypeSystem. An example is the `transmit<S,W,T>` function. When piping values from a source to the writer, its type `T` is determined by the schema at the runtime."],["ParameterizedOn","`ParameterizedOn` indicates a parameterized function `Self` is parameterized on type `T`"],["Realize","Realize means that a TypeSystem can realize a parameterized func F, based on its current variants."],["TypeAssoc","Associate a static type to a TypeSystem"],["TypeConversion",""],["TypeSystem","`TypeSystem` describes a type system in a value type (e.g. enum variants), which can be used to type check with a static type `T` through the `check` method."],["TypeSystemConversion",""]]});