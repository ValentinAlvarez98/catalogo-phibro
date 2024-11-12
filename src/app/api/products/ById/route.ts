import { CustomError, ServiceFactory } from "@/api/utils";
import { NextRequest, NextResponse } from "next/server";


const productsService = ServiceFactory.getProductsService();

export async function GET(req: NextRequest) {

      try {

            const searchParams = req.nextUrl.searchParams;

            const productId = await searchParams.get('productId');

            const categoryId = await searchParams.get('categoryId');

            if (!productId) {
                  return NextResponse.json({ message: 'productId is required' }, { status: 400 });
            }

            if (!categoryId) {
                  return NextResponse.json({ message: 'categoryId is required' }, { status: 400 });
            }

            const checkInForms = await productsService.findById(productId, categoryId)

            return NextResponse.json(checkInForms);


      } catch (error) {

            let status = 500;

            error instanceof CustomError ? status = error.status : null;

            return NextResponse.json(error, { status });

      }

}