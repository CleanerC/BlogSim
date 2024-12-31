import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.post.deleteMany()

    await prisma.post.createMany({
        data: [
          {
            title: 'SAMPLE BLOG POST 1',
            author: 'DAVID X',
            excerpt: 'SAMPLE TEXT SAMPLE TEXTSAMPLE TEXT SAMPLE TEXTSAMPLE TEXTSAMPLE TEXT SAMPLE TEXT SAMPLE TEXT',
            date: new Date('2024-12-30'),
            content: 'This is the full content of the second blog post. It can contain multiple paragraphs and be quite lengthy.',
          },
          {
            title: 'SAMPLE BLOG POST 2',
            author: 'BOB A',
            excerpt: 'SAMPLE TEXT SAMPLE TEXTSAMPLE TEXT SAMPLE TEXTSAMPLE TEXTSAMPLE TEXT SAMPLE TEXT SAMPLE TEXT',
            date: new Date('2024-12-31'),
            content: 'This is the full content of the second blog post. It can contain multiple paragraphs and be quite lengthy.',
          }
        ]
    })
}


main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })