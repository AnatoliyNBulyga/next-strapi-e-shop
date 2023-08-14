"use client";

import React, {useEffect, useState} from 'react';
import CartItem from "@/components/cart/cart-item";
import Summary from "@/components/cart/summary";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import {Product} from "@/types";

interface ClientCart {
    currentUser: any
}
const ClientCart = ({ currentUser }: ClientCart) => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    const totalItemPrice = (item: {product: Product, quantity: number} ) => item.product.attributes.price * item.quantity;

    const totalPrice = cart.items.reduce((total, item) => {
        return total + Number(item.product?.attributes?.price * item.quantity)
    }, 0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem key={item.product.id} data={item} totalPrice={totalItemPrice(item)} />
                                ))}
                            </ul>
                        </div>
                        <Summary totalPrice={totalPrice} currentUser={currentUser} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ClientCart;