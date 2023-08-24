"use client";

import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";

const UploadModal = () => {
	const uploadModal = useUploadModal();

	const [isLoading, setIsLoading] = useState();

	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			author: "",
			title: "",
			song: null,
			image: null,
		},
	});

	const onChange = (open: boolean) => {
		if (!open) {
			reset();
			uploadModal.onClose();
		}
	};

	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		// upload to supabase
	};

	return (
		<Modal
			title="Add a song"
			description="Upload a mp3 file"
			isOpen={uploadModal.isOpen}
			onChange={onChange}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="title"
					disabled={isLoading}
					{...register("title", { required: true })}
					placeholder="Song title"
				/>
			</form>
		</Modal>
	);
};

export default UploadModal;