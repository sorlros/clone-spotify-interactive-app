"use client";

import AuthModal from "@/components/AuthModal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	} // server-side 렌더링동안 어떤 것도 브라우저로 출력하지 않게한다.
	return (
		<>
			<AuthModal />
		</>
	);
};

export default ModalProvider;
