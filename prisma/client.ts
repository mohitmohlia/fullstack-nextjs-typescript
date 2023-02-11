import { PrismaClient } from "@prisma/client";

declare global {
  namespace Nodejs {
    interface Global {}
  }
}

//add-prisma-to the Nodejs Global type
interface CustomeNodeJsGlobal extends Nodejs.Global {
  prisma: PrismaClient;
}

//Prevent multiple.instances.of.PrismaClient.in.development
declare const global: CustomeNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

export default prisma;
