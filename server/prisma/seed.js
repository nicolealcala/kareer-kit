import { ALL_PERMISSIONS } from '../config/permissions.js'
import { roles } from '../config/roles.js'
import { prisma } from '../lib/prisma.js'

async function main() {
    // 1️⃣ Create / upsert all permissions
    for (const permission of ALL_PERMISSIONS) {
        await prisma.permission.upsert({
            where: { name: permission.name },
            update: {},
            create: {
                name: permission.name,
                description: permission.description,
            },
        })
    }

    // 2️⃣ Create / upsert all roles
    for (const role of roles) {
        await prisma.role.upsert({
            where: { name: role.name },
            update: {
                description: role.description,
                permissions: {
                    connect: role.permissions.map((p) => ({ name: p.name })),
                },
            },
            create: {
                name: role.name,
                description: role.description,
                permissions: {
                    connect: role.permissions.map((p) => ({ name: p.name })),
                },
            },
        })
    }

    console.log('Roles and permissions seeded successfully!')
}

// Run the seed script
main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
