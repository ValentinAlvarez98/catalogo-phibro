import { CustomError, ServiceFactory } from "@/api/utils";
import { NextRequest, NextResponse } from "next/server";


const productsService = ServiceFactory.getProductsService();

export async function POST(req: NextRequest) {

      try {

            const { name, type, description, logo, composition, categoryId, countries, presentation, qr } = await req.json();

            const product = await productsService.create({
                  name: name,
                  type: type,
                  description: description,
                  logo: logo,
                  composition: composition,
                  categoryId: categoryId,
                  countries: countries,
                  presentation: presentation,
                  qr: qr
            })

            return NextResponse.json(product);

      } catch (error) {

            let status = 500;

            if (error instanceof CustomError) {
                  status = error.status;
            }

            return NextResponse.json(error, { status });

      }

}

export async function GET(req: NextRequest) {

      try {

            const searchParams = req.nextUrl.searchParams;

            const categoryId = searchParams.get('categoryId');

            if (!categoryId) {
                  return NextResponse.json({ message: 'categoryId is required' }, { status: 400 });
            }

            const checkInForms = await productsService.findAllByCategory(categoryId)

            return NextResponse.json(checkInForms);


      } catch (error) {

            let status = 500;

            if (error instanceof CustomError) {
                  status = error.status;
            }

            return NextResponse.json(error, { status });

      }

}