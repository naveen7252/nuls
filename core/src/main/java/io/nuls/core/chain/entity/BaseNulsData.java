package io.nuls.core.chain.entity;

import io.nuls.core.crypto.UnsafeByteArrayOutputStream;
import io.nuls.core.exception.NulsException;
import io.nuls.core.exception.NulsVerificationException;
import io.nuls.core.utils.io.NulsByteBuffer;
import io.nuls.core.utils.io.NulsOutputStreamBuffer;
import io.nuls.core.validate.DataValidatorChain;
import io.nuls.core.validate.NulsDataValidator;
import io.nuls.core.validate.ValidateResult;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.Serializable;

/**
 * @author Niels
 * @date 2017/10/30
 */
public abstract class BaseNulsData implements Serializable {

    protected NulsDataType dataType;

    protected NulsVersion version;

    private DataValidatorChain validatorChain = new DataValidatorChain();

    public BaseNulsData() {

    }

    public BaseNulsData(NulsByteBuffer buffer) {
        this.parse(buffer);
    }

    public BaseNulsData(short mainVersion, short subVersion) {
        this.version = new NulsVersion(mainVersion, subVersion);
    }

    protected void registerValidator(NulsDataValidator<? extends BaseNulsData> validator) {
        this.validatorChain.addValidator(validator);
    }

    public abstract int size();

    /**
     * First, serialize the version field
     *
     * @return
     */
    public final byte[] serialize() throws IOException {
        this.verify();
        ByteArrayOutputStream bos = null;
        try {
            bos = new UnsafeByteArrayOutputStream(size());
            NulsOutputStreamBuffer buffer = new NulsOutputStreamBuffer(bos);
            serializeToStream(buffer);
            return bos.toByteArray();
        } finally {
            if (bos != null) {
                try {
                    bos.close();
                } catch (IOException e) {
                    throw e;
                }
            }
        }
    }

    /**
     * serialize important field
     *
     * @param stream
     * @throws IOException
     */
    public abstract void serializeToStream(NulsOutputStreamBuffer stream) throws IOException;

    public abstract void parse(NulsByteBuffer byteBuffer);

    public final void parse(byte[] bytes) {
        this.parse(new NulsByteBuffer(bytes));
    }

    /**
     * @throws NulsException
     */
    public final void verify() throws NulsVerificationException {
        ValidateResult result = this.validatorChain.startDoValidator(this);
        if (!result.isSeccess()) {
            throw new NulsVerificationException(result.getMessage());
        }
    }

    public NulsDataType getDataType() {
        return dataType;
    }

    public void setDataType(NulsDataType dataType) {
        this.dataType = dataType;
    }


    public NulsVersion getVersion() {
        return version;
    }

    public void setVersion(NulsVersion version) {
        this.version = version;
    }

    public void setVersionBy(short main, short sub) {
        version.setVersionBy(main, sub);
    }
}