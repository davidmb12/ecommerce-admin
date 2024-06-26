"use client"

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
    entityName: string;
    enitityIdName: string;
}
export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    enitityIdName
}) => {
    const params = useParams();
    const origin = useOrigin();
    const baseUrl = `${origin}/api/${params.storeId}`;

    return (
        <>
            <ApiAlert
                title="GET"
                variant="public"
                description={`${baseUrl}/${entityName}`} />
            <ApiAlert
                title="GET"
                variant="public"
                description={`${baseUrl}/${entityName}/{${enitityIdName}}`} />
            <ApiAlert
                title="POST"
                variant="admin"
                description={`${baseUrl}/${entityName}`} />
            <ApiAlert
                title="PATCH"
                variant="admin"
                description={`${baseUrl}/${entityName}/{${enitityIdName}}`} />
            <ApiAlert
                title="DELETE"
                variant="public"
                description={`${baseUrl}/${entityName}/{${enitityIdName}}`} />
        </>
    )
}