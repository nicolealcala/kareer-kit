import { ALL_PERMISSIONS } from '../config/permissions.js'
import { roles } from '../config/roles.js'
import { prisma } from '../lib/prisma.js'


async function main() {
    //Create permissions
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

    //Create roles
    for (const role of roles) {
        await prisma.role.upsert({
            where: { name: role.name },
            update: {
                description: roleData.description,
                permissions: {
                    connect: roleData.permissions.map(p => ({ name: p.name })),
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

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })