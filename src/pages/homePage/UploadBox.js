import styles from "./index.less";
import { Upload, Button } from 'antd';
import { getUrl } from '@/utils/request';
import ManualUpload from '@/components/ManualUpload';
function UploadBox({ index = null, onUpload, showUploadList=false }) {
    return <div>
        <ManualUpload
            onChange={onUpload.bind(this, index)}
            showUploadList={showUploadList}
        />
    </div>
}
export default UploadBox;