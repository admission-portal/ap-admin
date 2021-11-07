import { PageHeader, SelectFields } from '../../components/'
import './style.css'
export default function GenerateApplication() {

    return (
        <div className="GenerateApplication">
            <PageHeader title="Generate Application" />
            <form autoComplete="off">
                <input type="text" id="title" name="title" placeholder="Enter Title" onChange={() => { }} required />
                <input type="text" id="description" name="description" placeholder="Enter Description Here" onChange={() => { }} required />
                <input type="text" id="Branch" name="Branch" placeholder="For Branch" onChange={() => { }} required />
                <input type="text" id="stream" name="stream" placeholder="For stream" onChange={() => { }} required />
                <input type="number" id="Fees" min={0} name="Fees" placeholder="Registration Fees" onChange={() => { }} required />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.1em' }}>
                    <label htmlFor="DueDate">Last Date to fill form :</label><br />
                    <input id="DueDate" type="date" style={{ marginLeft: '0.5em' }} onChange={() => { }} required />
                </div>
                <SelectFields />
                <input type="submit" value="Submit" />
            </form>
        </div >
    )
}
