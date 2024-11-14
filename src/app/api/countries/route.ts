import { CustomError, ServiceFactory } from "@/api/utils";
import { NextRequest, NextResponse } from "next/server";


const countryService = ServiceFactory.getCountriesService();

export async function POST(req: NextRequest) {

      try {

            const { flag, name } = await req.json();

            const country = await countryService.create({
                  flag: flag,
                  name: name
            })

            return NextResponse.json(country);

      } catch (error) {

            let status = 500;

            if (error instanceof CustomError) {
                  status = error.status;
            }

            return NextResponse.json(error, { status });

      }

}

export async function GET() {
      try {

            const countries = await countryService.findAll()

            return NextResponse.json(countries);

      } catch (error) {

            let status = 500;

            if (error instanceof CustomError) {
                  status = error.status;
            }

            return NextResponse.json(error, { status });

      }

}