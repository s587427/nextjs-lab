"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
    const { t } = useTranslation();
    return <p className="mb-2">{t("greeting")}</p>;
}
