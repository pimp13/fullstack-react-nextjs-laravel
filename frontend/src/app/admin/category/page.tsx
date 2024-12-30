import Link from "next/link";
import { Badge } from "flowbite-react";

const CategoryPage = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/category");
    const categories = await response.json();

    return (
        <section>
            <div className="md:flex px-3 pb-3 md:items-center md:justify-between">
                <div>
                    <h2 className="text-xl font-semibold">لیست دسته بندی ها</h2>
                </div>
                <div className="my-3 md:my-0">
                    <Link className="text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        href="/admin/category/create">ساخت دسته بندی</Link>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full overflow-x-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                نام دسته بندی
                            </th>
                            <th scope="col" className="px-6 py-3">
                                وضعیت
                            </th>
                            <th scope="col" className="px-6 py-3">
                                آدرس اسلاگ URL
                            </th>
                            <th scope="col" className="px-6 py-3">
                                تنظیمات
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category: any) => (
                            <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {category.name}
                                </th>
                                <td className="px-6 py-4">
                                    {category.is_active ?
                                        <Badge color="success" className="inline">فعال است</Badge> :
                                        <Badge color="warning" className="inline">غیرفعال است</Badge>}
                                </td>
                                <td className="px-6 py-4">
                                    {category.slug}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Show & Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}


export default CategoryPage;