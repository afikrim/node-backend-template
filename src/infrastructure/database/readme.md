## What is the content of this folder?

Structure from this folder will looks like this,

```plaintext
database
├── repositories // when using relational database
│   ├── [domain].repository.ts
│   └── ...
├── models // when using mongodb
│   ├── [domain].model.ts
│   └── ...
└── database.module.ts
```

- repositories: custom repository
