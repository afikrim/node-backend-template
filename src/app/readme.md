## What is the content of this folder?

Structure from this folder will looks like this,

```plaintext
app
├── [domain]
│   ├── controllers
│   │   ├── [domain].controller.ts
│   │   ├── [domain].controller.spec.ts
│   │   └── ...
│   ├── guards
│   │   ├── [name].guard.ts
│   │   └── ...
│   ├── middlewares
│   │   ├── [name].middleware.ts
│   │   └── ...
│   ├── services
│   │   ├── [domain].service.ts
│   │   ├── [domain].service.spec.ts
│   │   └── ...
│   └── [domain].module.ts
└── ...
```

- controllers: fill with our [domain]'s controllers
- guards: fill with our [domain]'s guards
- middlewares: fill with our [middleware]'s guards
- services: fill with our [domain]'s services
