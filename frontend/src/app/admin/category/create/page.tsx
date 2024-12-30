"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const CategoryPage = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        slug: "",
        description: "",
        is_active: '',
    });
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/category", form);
            console.log(form);
            if (response.status === 201) {
                router.push("/admin/category");
            } else {
                console.log("ERROR");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section>
            <div className="md:flex px-3 pb-3 md:items-center md:justify-between">
                <div>
                    <h2 className="text-xl font-semibold">ساخت دسته بندی</h2>
                </div>
                <div className="my-3 md:my-0">
                    <button className="text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => router.back()}
                    >بازگشت</button>
                </div>
            </div>

            <div className="flex justify-center mb-2">
                <div className="w-full max-w-md md:max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">فرم ثبت دسته بندی</h5>
                        <div>
                            <label htmlFor="name" className="block mb-2 required text-sm font-medium text-gray-900 dark:text-white">
                                نام دسته بندی
                            </label>
                            <input type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            <small className="text-gray-500 dark:text-gray-400">نام دسته بندی حداکثر 150 کاراکتر</small>
                        </div>
                        <div>
                            <label htmlFor="slug" className="block mb-2 required text-sm font-medium text-gray-900 dark:text-white">آدرس اسلاگ url</label>
                            <input type="text"
                                name="slug"
                                id="slug"
                                value={form.slug}
                                onChange={handleChange}
                                placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <small className="text-gray-500 dark:text-gray-400">آدرس اسلاگ باید منحصر به فرد باشه و حداکثر 70 کاراکتر</small>
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 required text-sm font-medium text-gray-900 dark:text-white">توضیحات</label>
                            <textarea id="description"
                                name="description"
                                rows={4}
                                value={form.description}
                                onChange={handleChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                            <small className="text-gray-500 dark:text-gray-400">حداکثر 190 کاراکتر حداقل 60 کاراکتر</small>
                        </div>
                        <div>
                            <label htmlFor="is_active" className="block required mb-2 text-sm font-medium text-gray-900 dark:text-white">وضعیت دسته بندی</label>
                            <select id="is_active"
                                onChange={handleChange}
                                name="is_active"
                                value={form.is_active}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="1">فعال باشه</option>
                                <option value="0">غیرفعال باشه</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            ثبت دسته بندی
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CategoryPage;