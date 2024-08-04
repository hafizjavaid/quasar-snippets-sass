import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const products = await prisma.product.createMany({
        data: [
            {
                title: 'All Access',
                description: 'Gain access to all of the snippets in the Application UI, Marketing, and Ecommerce categories — all of the components you need to build any UI'
            },
            {
                title: 'Application UI Access',
                description: ''
            },
            {
                title: 'Marketing Access',
                description: ''
            },
            {
                title: 'Ecommerce Access',
                description: ''
            },
        ]
    })
    console.log({ products })
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