<template>
    <div>
        <Row>
            <Col span="24">
                <Card>
                    <user-edit-table></user-edit-table>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import userEditTable from './components/user-edit-table'
    export default {
        components: {
            userEditTable
        }
    }   
</script>