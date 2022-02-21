## What is the content of this folder?

Structure from this folder will looks like this,

```plaintext
domains
├── [domain]
│   ├── dto
│   │   ├── [create-domain].dto.ts
│   │   └── ...
│   ├── entities // when using relational database
│   │   ├── [domain].entity.ts
│   │   └── ...
│   ├── schemas // when using mongo
│   │   ├── [domain].schema.ts
│   │   └── ...
│   │   [domain].service.ts
│   │   [domain].service.spec.ts
│   └── [domain].module.ts
└── ...
```

- dto: data to object, class that represent an object type
- entities: folder for [domain]'s entity in relational db
- schemas: folder for [domain]'s schema in mongodb
